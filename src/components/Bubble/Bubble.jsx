// React 相關
import { useEffect, useRef, useCallback } from 'react';

// GSAP 相關
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 自訂 Hooks
import useWindowWidth from '../../hooks/useWindowWidth';

// 註冊 ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function BubbleAni() {
  const windowWidth = useWindowWidth();
  const bubbleCanvas = useRef(null);
  const bubbles = useRef([]);
  const animationFrameId = useRef(null);
  const isAnimating = useRef(false);
  const resizeHandlerRef = useRef(null);

  //  canvas resize
  const createResizeHandler = useCallback((canvas) => {
    return () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  }, []);

  // 泡泡生產 class
  const createBubbleClass = useCallback((canvas, ctx) => {
    return function Bubble() {
      this.radius = Math.random() * 30 + 1;
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + this.radius + Math.random() * 800;
      this.speed = (4 - this.radius / 10) * 0.1;
      this.acceleration = 0.02 * 0.01;
      this.opacity = Math.random() * 0.3;
      this.direction = Math.random() > 0.5 ? 1 : -1;
      this.colorStyle = Math.random() > 0.65 ? 'gradient' : 'white';

      this.draw = function () {
        if (this.colorStyle === 'gradient') {
          const gradient = ctx.createRadialGradient(
            this.x,
            this.y - (this.radius / 20) * this.radius,
            0,
            this.x,
            this.y - (this.radius / 20) * this.radius,
            this.radius,
          );
          gradient.addColorStop(0, `rgba(186, 219, 245, 0.5)`);
          gradient.addColorStop(1, 'rgba(186, 219, 245, .1)');
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        }

        ctx.shadowBlur = 50;
        ctx.shadowColor = 'rgba(196, 223, 243, 0.5)';
        ctx.strokeStyle = 'rgba(186, 219, 245, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      this.update = function (deltaTime) {
        this.speed += this.acceleration;
        this.y -= this.speed * deltaTime;
        this.x += this.direction * Math.random() * 0.7;
        if (this.y + this.radius < 0) {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + this.radius + Math.random() * 800;
          this.speed = (4 - this.radius / 5) * 0.1;
          this.direction = Math.random() > 0.5 ? 1 : -1;
        }
        this.draw();
      };
    };
  }, []);

  // 動畫 start
  const startAnimation = useCallback(
    (canvas, ctx, BubbleClass, bubbleCount) => {
      if (isAnimating.current) return;

      isAnimating.current = true;
      bubbles.current = [];

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.current.push(new BubbleClass());
      }

      let lastTime = 0;
      function animate(currentTime) {
        if (!isAnimating.current) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        bubbles.current.forEach((bubble) => {
          bubble.update(deltaTime);
        });

        animationFrameId.current = requestAnimationFrame(animate);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    },
    [],
  );

  // 動畫 stop
  const stopAnimation = useCallback((canvas, ctx) => {
    isAnimating.current = false;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    bubbles.current = [];
  }, []);

  useEffect(() => {
    const canvas = bubbleCanvas.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const bubbleCount = windowWidth > 768 ? 45 : 25;
    const BubbleClass = createBubbleClass(canvas, ctx);

    // 初始 canvas 尺寸
    resizeHandlerRef.current = createResizeHandler(canvas);
    resizeHandlerRef.current();
    window.addEventListener('resize', resizeHandlerRef.current);

    // 設定 ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: '#section1',
      start: 'top 15%',
      onEnter: () => startAnimation(canvas, ctx, BubbleClass, bubbleCount),
      onLeaveBack: () => stopAnimation(canvas, ctx),
    });

    // 清理
    return () => {
      stopAnimation(canvas, ctx);

      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
      }

      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [
    windowWidth,
    createBubbleClass,
    createResizeHandler,
    startAnimation,
    stopAnimation,
  ]);
  return (
    <div>
      <canvas
        ref={bubbleCanvas}
        className="pointer-events-none fixed bottom-0 left-0 right-0 top-0"
      ></canvas>
    </div>
  );
}

export default BubbleAni;
