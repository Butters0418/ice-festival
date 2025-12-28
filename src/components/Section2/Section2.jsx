// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// image
import { transparentpic } from '../../assets/layout';
import {
  section2BgCreambubLeft,
  section2BgCreambubRight,
  section2Title,
} from '../../assets/layout';

// style
import { SWrap, SBgBox, SMainBox, SFgBox } from './style';
import { STitle, SSwiperContainer, SRainbowLine } from './style';
import {
  SPdItem,
  SInfoBox,
  SPdTitle,
  SPdImg,
  SPdName,
  SPdPrice,
} from './style';

function Section2() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section2Data, setSection2Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 53);
    if (idData.length !== 0) {
      setSection2Data(idData.concat([...idData]));
    }
  }, [newPdData]);
  return (
    <SWrap>
      <SBgBox>
        <div className="relative flex h-full w-full flex-col items-center justify-start">
          <div className="relative h-[330px] shrink-0 self-stretch overflow-hidden [background:linear-gradient(180deg,_rgba(243,_243,_243,_0),_#f3f3f3)]" />
          <div className="relative flex-1 self-stretch overflow-hidden bg-white-200" />
        </div>
        <div className="absolute left-0 top-0 h-full w-full shrink-0 overflow-hidden">
          <picture>
            <source
              srcSet={section2BgCreambubLeft}
              media="(min-width: 1280px)"
            />
            <img
              src={transparentpic}
              alt="section2BgCreambubLeft"
              className="absolute left-[0px] top-[0px] h-[260px] w-[327px]"
            />
          </picture>
          <picture>
            <source
              srcSet={section2BgCreambubRight}
              media="(min-width: 1280px)"
            />
            <img
              src={transparentpic}
              alt="section2BgCreambubRight"
              className="absolute right-[0px] top-[0px] h-[412px] w-[239px]"
            />
          </picture>
        </div>
      </SBgBox>

      <SMainBox>
        <div className="container">
          <STitle>
            <h2>
              <img src={section2Title} alt="section2Title" />
            </h2>
            <h3>
              <span>出門在外，隨時要吃冰～</span>
            </h3>
          </STitle>
        </div>

        <div className="pb-10 md:py-[60px] xl:py-20">
          {section2Data.length > 0 && (
            <SSwiperContainer>
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                speed={2000}
              >
                {section2Data.map((item, index) => {
                  const bgColor = ['blue', 'red', 'purple', 'green'];
                  const bgIndex = index % 4;
                  const formattedPrice = formatPriceText(item.discountPrice);
                  return (
                    <SwiperSlide className="swiper-slider" key={index}>
                      <a href={item.url} rel="noopener noreferrer">
                        <SPdItem>
                          <SPdTitle>
                            <span>{item.productTitle}</span>
                          </SPdTitle>
                          <SInfoBox color={bgColor[bgIndex]}>
                            <SPdImg>
                              <img
                                src={item.imgSrc}
                                alt={item.imgTitle || '商品圖'}
                              />
                            </SPdImg>
                            <SPdName>
                              <span>{item.productName}</span>
                            </SPdName>
                            <SPdPrice>
                              <span>
                                <b
                                  dangerouslySetInnerHTML={{
                                    __html: formattedPrice,
                                  }}
                                ></b>
                              </span>
                            </SPdPrice>
                          </SInfoBox>
                        </SPdItem>
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SSwiperContainer>
          )}
        </div>

        <SRainbowLine>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
        </SRainbowLine>
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}

export default Section2;
