import { useRef } from 'react';

// custom hooks & utils
import useWindowWidth from '../../hooks/useWindowWidth';

// gsap & scrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// image
import {
  bannerAniBobble,
  bannerAniIcefly,
  bannerAniLD,
  bannerAniLU,
  bannerAniRD,
  bannerAniRU,
  bannerBgIceleft,
  bannerBgIceright,
  bannerBgMain,
  bannerFgCloudicebg,
  bannerFgCloudiceleft,
  bannerFgCloudiceright,
  bannerFgIcecube,
  bannerTitDecoBig,
  bannerTitDecoMid,
  bannerTitInfo,
  bannerTitName,
} from '../../assets/layout';

// styled
import { BgBox, FgBox, MainBox, Wrap } from './style';

gsap.registerPlugin(ScrollTrigger);

function BannerPC() {
  const ww = useWindowWidth();
  const isDesktop = ww > 768;
  const kv = useRef();

  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: kv.current,
          scrub: 1,
          start: `top ${isDesktop ? 39 : 104}px`,
          invalidateOnRefresh: true,
        },
      });

      tl1.fromTo('.ice-back-bg', { y: 0 }, { y: -250 }, 0);
      tl1.fromTo('.ice-front-left', { y: 0 }, { y: -300 }, 0);
      tl1.fromTo('.ice-front-right', { y: 0 }, { y: -300 }, 0);
      tl1.fromTo('.kv-ani-item', { y: 0 }, { y: 120 }, 0);
      tl1.fromTo('.main-title-bg', { y: 0 }, { y: -100 }, 0);
      tl1.fromTo('.bubble-left', { y: 0 }, { y: -150 }, 0);
      tl1.fromTo('.bubble-right', { y: 0 }, { y: -150 }, 0);
      tl1.fromTo('.ice-top-left', { y: 0 }, { y: -100 }, 0);
      tl1.fromTo('.ice-top-right', { y: 0 }, { y: -100 }, 0);
    },
    {
      scope: kv,
      dependencies: [isDesktop],
      revertOnUpdate: true,
    },
  );

  return (
    <Wrap ref={kv} className="wrap relative z-10" id="component0">
      <BgBox>
        {/* 背景大底圖 */}
        <div
          className="absolute h-full w-full bg-fixed bg-top bg-no-repeat xl:[background-size:100%]"
          style={{ backgroundImage: `url(${bannerBgMain})` }}
        ></div>
        {/* 左右前景圖 */}
        <img
          className="ice-top-left fixed left-0 top-[65px] xl:top-0"
          src={bannerBgIceleft}
          alt="bannerBgIceleft"
        />
        <img
          className="ice-top-right fixed right-0 top-[65px] xl:top-0"
          src={bannerBgIceright}
          alt="bannerBgIceright"
        />
        {/* 左動態圖 */}
        <div className="bubble-left fixed left-[-127px] h-[875px] w-[727px] opacity-0 duration-200 xl:top-[-85px] 2xl:opacity-100">
          <img
            className="absolute left-[88px] top-[423px] h-[452px] w-[434px]"
            src={bannerAniLD}
            alt="bannerAniLD"
          />
          <img
            className="absolute left-0 top-0 h-[562px] w-[727px]"
            src={bannerAniLU}
            alt="bannerAniLU"
          />
        </div>
        {/* 右動態圖 */}
        <div className="bubble-right fixed right-[-45px] h-[848px] w-[613px] opacity-0 duration-200 xl:top-[-93px] 2xl:opacity-100">
          <img
            className="absolute left-[72px] top-[421px] h-[427px] w-[541px]"
            src={bannerAniRD}
            alt="bannerAniRD"
          />
          <img
            className="absolute left-0 top-0 h-[463px] w-[581px]"
            src={bannerAniRU}
            alt="bannerAniRU"
          />
        </div>
        {/* 中動態圖 */}
        <div className="kv-ani-item fixed left-1/2 top-[105px] h-[860px] w-[1549px] -translate-x-1/2 xl:top-10">
          <img
            className="h-[860px] w-[1549px]"
            src={bannerAniBobble}
            alt="bannerAniBobble"
          />
          <img
            className="absolute left-[232px] top-[-228px] h-[731px] w-[701px]"
            src={bannerAniIcefly}
            alt="bannerAniIcefly"
          />
        </div>
      </BgBox>

      <MainBox>
        {/* 標題區 */}
        <div className="main-title-bg fixed left-1/2 top-[159px] h-[643px] w-[768px] -translate-x-1/2 xl:top-[40px] xl:h-[860px] xl:w-[1200px]">
          <picture>
            <source srcSet={bannerTitDecoBig} media="(min-width: 1280px)" />
            <img src={bannerTitDecoMid} alt="bannerTitDeco" />
          </picture>
          <div className="absolute left-1/2 top-[55px] h-[380px] w-[476.68px] -translate-x-1/2 md:top-[55px] md:h-[446.42px] md:w-[560px] xl:top-0 xl:h-[653.68px] xl:w-[820px]">
            <a href="">
              <img src={bannerTitName} alt="bannerTitName" />
              <img
                className="absolute bottom-0 left-1/2 w-[820px] -translate-x-1/2"
                src={bannerTitInfo}
                alt="bannerTitInfo"
              />
            </a>
          </div>
        </div>
      </MainBox>

      <FgBox>
        {/* 下方前景圖 */}
        <img
          className="ice-back-bg fixed left-1/2 top-[461px] z-[4] h-[648px] w-[2000px] min-w-[2000px] -translate-x-1/2 md:top-[531px] xl:top-[576px]"
          src={bannerFgIcecube}
          alt="bannerFgIcecube"
        />

        <div className="ice-front-left fixed left-1/2 top-[415px] z-[8] h-[740] w-full min-w-[2000px] -translate-x-1/2 md:top-[485px] xl:top-[530px]">
          <img
            className="absolute left-0 top-0 h-[740] w-[876.78px]"
            src={bannerFgCloudiceleft}
            alt="bannerFgCloudiceleft"
          />
        </div>
        <div className="ice-front-right fixed left-1/2 top-[415px] z-[8] h-[740] w-full min-w-[2000px] -translate-x-1/2 md:top-[485px] xl:top-[530px]">
          <img
            className="absolute right-0 top-0 h-[740] w-[876.78px]"
            src={bannerFgCloudiceright}
            alt="bannerFgCloudiceright"
          />
        </div>
        <div
          className="absolute left-0 top-[375px] z-[5] h-[1110px] w-full min-w-[2560px] bg-repeat-x md:top-[445px] xl:top-[480px]"
          style={{ backgroundImage: `url(${bannerFgCloudicebg})` }}
        />
      </FgBox>
    </Wrap>
  );
}

export default BannerPC;
