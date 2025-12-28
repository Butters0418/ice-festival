// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// image 資源
import {
  section6DiscountBgDeco as section6BgDeco,
  section6DiscountBgDecoRight as section6BgDecoRight,
  section6DiscountBgDecoLeft as section6BgDecoLeft,
  section6DiscountPdImg2x01 as section6PdImg2x01,
  section6DiscountPdImg2x02 as section6PdImg2x02,
} from '../../assets/layout';

// style 資源
import { SWrap, SBgBox, SMainBox, SFgBox } from './style';

function Section6() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section6Data, setSection6Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 88);
    if (idData.length !== 0) {
      setSection6Data(idData.concat([...idData]));
    }
  }, [newPdData]);
  return (
    <SWrap>
      <SBgBox>
        <div className="relative h-full w-full [background:linear-gradient(180deg,_#18dfe4,_rgba(90,_236,_192,_0.71)_43.23%,_rgba(255,_255,_255,_0))]">
          <img
            className="absolute right-0 top-1/2 z-[1] h-[640px] w-[1920px] shrink-0 -translate-y-1/2 object-cover"
            alt="bgDecoRight"
            src={section6BgDecoRight}
          />
          <img
            className="absolute left-0 top-1/2 z-[2] h-[640px] w-[1920px] shrink-0 -translate-y-1/2 object-cover"
            alt="bgDecoLeft"
            src={section6BgDecoLeft}
          />
          <img
            className="relative left-1/2 top-1/2 z-[3] h-[640px] w-[1920px] shrink-0 -translate-x-1/2 -translate-y-1/2 object-cover"
            alt="bgDeco"
            src={section6BgDeco}
          />
        </div>
      </SBgBox>

      <SMainBox>
        <div className="px-5 py-0 md:px-20 md:py-10 xl:px-40 xl:py-10 2xl:px-40 2xl:py-20">
          <div className="overflow-hidden py-10">
            {section6Data.length > 0 && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                spaceBetween={40}
                speed={2000}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 80,
                  },
                }}
              >
                {section6Data.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="!w-auto">
                      <a
                        className="relative block h-[262px] w-[230px] shrink-0 overflow-hidden"
                        href={item.url}
                      >
                        <img
                          className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full max-h-full w-full max-w-full overflow-hidden object-cover"
                          alt={item.productName}
                          src={item.imgSrc}
                        />
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}

export default Section6;
