// react 相關
import { useEffect, useState } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';

// image
import {
  section6DiscountBgDeco,
  section6DiscountBgDecoLeft,
  section6DiscountBgDecoRight,
} from '../../assets/layout';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// style
import {
  SWrap,
  SBgBox,
  SMainBox,
  SFgBox,
  SBgInner,
  SBgImgRight,
  SBgImgLeft,
  SBgImgCenter,
  SContent,
  SSwiperWrap,
  SSlideLink,
  SSlideImg,
} from './style';

function Section8() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section8Data, setSection8Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 121);
    idData.length !== 0 && setSection8Data(idData);
  }, [newPdData]);

  const slideData =
    section8Data.length > 0 ? section8Data.concat(section8Data) : [];

  return (
    <SWrap>
      <SBgBox>
        <SBgInner>
          <SBgImgRight
            alt="discountBgDecoRight"
            src={section6DiscountBgDecoRight}
          />
          <SBgImgLeft
            alt="discountBgDecoLeft"
            src={section6DiscountBgDecoLeft}
          />
          <SBgImgCenter alt="discountBgDeco" src={section6DiscountBgDeco} />
        </SBgInner>
      </SBgBox>

      <SMainBox>
        <SContent>
          <SSwiperWrap>
            {slideData.length > 0 && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop
                spaceBetween={20}
                speed={2000}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 40,
                  },
                  1280: {
                    spaceBetween: 80,
                  },
                }}
              >
                {slideData.map((item, index) => (
                  <SwiperSlide key={`${item.id}-${index}`} className="!w-auto">
                    <SSlideLink href={item.url} rel="noreferrer">
                      <SSlideImg
                        alt={item.imgTitle || item.productName}
                        src={item.imgSrc}
                      />
                    </SSlideLink>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </SSwiperWrap>
        </SContent>
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}

export default Section8;
