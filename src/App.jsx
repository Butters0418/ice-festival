// packages
import { useEffect } from 'react';

// stores
import { useLaLaStore1 } from './stores/useLaLaStore';

// custom hooks & utils
import scrollToElement from './utils/scrollToElement';
import useWindowWidth from './hooks/useWindowWidth.js';

// components
import Header from './components/basic/Header.jsx';
import Footer from './components/basic/Footer.jsx';
import LeftNav from './components/basic/LeftNav.jsx';
import RightNav from './components/basic/RightNav.jsx';
// activities
import BannerPC from './components/Banner/BannerPC.jsx';
import BannerMb from './components/Banner/BannerMb.jsx';
import Section1 from './components/Section1/Section1.jsx';
import Section2 from './components/Section2/Section2.jsx';
import Section3 from './components/Section3/Section3.jsx';
import Section4 from './components/Section4/Section4.jsx';
import Section5 from './components/Section5/Section5.jsx';
import Section6 from './components/Section6/Section6.jsx';
import Section7 from './components/Section7/Section7.jsx';
import Section8 from './components/Section8/Section8.jsx';
import Section9 from './components/Section9/Section9.jsx';
import BubbleAni from './components/Bubble/Bubble.jsx';

// image
import { wrapBgFixed } from './assets/layout/index.js';

function App() {
  const hasLeftNav = true; // 是否需要左選單?
  const getLalaData1 = useLaLaStore1((state) => state.getData); // 執行呼叫拉拉熊 1 資料方法
  const ww = useWindowWidth();

  // 取得拉拉熊 1 資料
  useEffect(() => {
    getLalaData1();
  }, []);

  // 判斷是否有網址 #id 錨點
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 30;

    const scrollHandler = () => {
      const anchor = window.location.hash.split('#')[1];
      if (!anchor) {
        return;
      } else {
        scrollToElement(anchor, 'instant');
      }

      if (retryCount < maxRetries) {
        retryCount++;
        requestAnimationFrame(scrollHandler);
      } else {
        console.warn('錨點 id 有誤');
      }
    };

    scrollHandler();
  }, []);
  return (
    <div>
      <Header />
      {hasLeftNav && <LeftNav />}
      <RightNav />
      {/* ============ Main ============ */}
      {ww > 1280 ? <BannerPC /> : <BannerMb />}
      <div
        className="relative z-20 overflow-hidden bg-cover bg-fixed bg-top md:bg-[length:100%]"
        style={{ backgroundImage: `url(${wrapBgFixed})` }}
      >
        <BubbleAni />
        <div id="section1" data-title="折價券強打">
          <Section1 />
        </div>
        <div id="section2" data-title="電子票券">
          <Section2 />
        </div>
        <div id="section3" data-title="無酒精氣泡">
          <Section3 />
        </div>
        <div id="section4" data-title="話題飲品">
          <Section4 />
        </div>
        <div id="section5" data-title="汽泡飲">
          <Section5 />
        </div>
        <Section6 />
        <div id="section7" data-title="熱銷冰品">
          <Section7 />
        </div>
        <Section8 />
        <div id="section9" data-title="出遊消暑">
          <Section9 />
        </div>
      </div>

      {/* ============ End Main ============ */}
      <Footer hasLeftNav={hasLeftNav} />
    </div>
  );
}
export default App;
