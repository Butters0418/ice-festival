import { useEffect, useState } from 'react';

// packages
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// images
import { section1BgBubble } from '../../assets/layout';

// style
import {
  SWrap,
  SBgBox,
  SMainBox,
  SFgBox,
  SCoupon,
  SSwiperContainer,
  SPdItem,
  SPdImg,
  SPdTitle,
  SInfoBox,
  SPdName,
  SPdPrice,
} from './style';

// constants

function Section1() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [bankData, seBankData] = useState([]);
  const [mainPdData, setMainPdData] = useState([]);

  useEffect(() => {
    const idData1 = getDataById(newPdData, 31);
    idData1.length !== 0 && seBankData(idData1);
    const idData2 = getDataById(newPdData, 42);
    idData2.length !== 0 && setMainPdData(idData2);
  }, [newPdData]);
  return (
    <SWrap>
      <SBgBox>
        <div className="absolute left-0 top-0 h-60 w-full bg-[linear-gradient(180deg,_#f9f9f9,_rgba(249,_249,_249,_0)_71.35%)]" />
      </SBgBox>

      <div className="absolute left-1/2 top-0 w-full max-w-[2000px] -translate-x-1/2">
        <img
          className="absolute left-0 top-0 w-full"
          alt="bg bubble"
          src={section1BgBubble}
        />
      </div>

      <SMainBox>
        <div className="container !max-w-full xl:!max-w-[1240px]">
          <SCoupon>
            {bankData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <img alt={item.productName} src={item.imgSrc} />
                  </a>
                </li>
              );
            })}
          </SCoupon>
        </div>

        <div className="px-0 py-10 xl:py-20">
          {mainPdData.length > 0 && (
            <SSwiperContainer>
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                speed={2000}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                }}
              >
                {mainPdData.map((item, index) => {
                  return (
                    <SwiperSlide
                      className={`swiper-slider ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                      key={index}
                    >
                      <a href={item.url}>
                        <SPdItem>
                          <SPdImg>
                            <img src={item.imgSrc} alt="商品圖" />
                          </SPdImg>
                          <SPdTitle>
                            <span>{item.productTitle}</span>
                          </SPdTitle>
                          <SInfoBox>
                            <SPdName>
                              <span>{item.productName}</span>
                            </SPdName>
                            <SPdPrice
                              dangerouslySetInnerHTML={{
                                __html: formatPriceText(item.discountPrice),
                              }}
                            />
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
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}
export default Section1;
