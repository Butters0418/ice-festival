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
  bannerFgCloudicebgMb,
  bannerFgCloudiceleftMb,
  bannerFgCloudicerightMb,
  bannerFgIcecubeMb,
  bannerTitDecoBig,
  bannerTitDecoMid,
  bannerTitInfo,
  bannerTitName,
} from '../../assets/layout';

// styled
import { BgBox, FgBox, MainBox, Wrap } from './style';

function BannerMb() {
  return (
    <Wrap id="component0">
      <BgBox>
        {/* 背景大底圖 */}
        <div
          className="absolute h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerBgMain})` }}
        ></div>
        {/* 左右前景圖 */}
        <img
          className="absolute left-0 top-0"
          src={bannerBgIceleft}
          alt="bannerBgIceleft"
        />
        <img
          className="absolute right-0 top-0"
          src={bannerBgIceright}
          alt="bannerBgIceright"
        />
        {/* 左動態圖 */}
        <div className="absolute left-[-127px] top-[-125px] h-[875px] w-[727px] opacity-0 duration-200 2xl:opacity-100">
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
        <div className="absolute right-[-45px] top-[-133px] h-[848px] w-[613px] opacity-0 duration-200 2xl:opacity-100">
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
        <div className="absolute left-1/2 top-0 h-[860px] w-[1549px] -translate-x-1/2">
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
        <div className="absolute left-1/2 top-[54px] h-[643px] w-[768px] -translate-x-1/2 xl:top-0 xl:h-[860px] xl:w-[1200px]">
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
          className="absolute bottom-0 left-1/2 h-[324px] w-[2000px] min-w-[2000px] -translate-x-1/2"
          src={bannerFgIcecubeMb}
          alt="bannerFgIcecubeMb"
        />
        <div
          className="absolute bottom-0 left-1/2 h-[370px] w-full min-w-[2000px] -translate-x-1/2"
          style={{ backgroundImage: `url(${bannerFgCloudicebgMb})` }}
        >
          <img
            className="absolute left-0 top-0 h-[370px] w-[876.78px]"
            src={bannerFgCloudiceleftMb}
            alt="bannerFgCloudiceleftMb"
          />
          <img
            className="absolute right-0 top-0 h-[370px] w-[876.78px]"
            src={bannerFgCloudicerightMb}
            alt="bannerFgCloudicerightMb"
          />
        </div>
      </FgBox>
    </Wrap>
  );
}

export default BannerMb;
