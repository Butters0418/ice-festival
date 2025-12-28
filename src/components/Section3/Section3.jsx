// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// image
import {
  section3BgMoya,
  section3BgDecoYellow,
  section3BgDecoPink,
  section3BgDecoBlue,
  section3BgStarYellow,
  section3BgStarPink,
  section3BgStarBlue,
  section3TitImg,
  section3PdImgLarge,
  section3PdImgSmallBg,
  section3PdImgLargeBg,
  section3PdTitBg,
  section3PdIconArrow,
} from '../../assets/layout';

// style
import { SWrap, SBgBox, SMainBox, SFgBox } from './style';
import { STitle, STable } from './style';
import {
  SPdItem,
  SInfoBox,
  SPdTitle,
  SPdImg,
  SPdName,
  SPdPrice,
  SPdTitleL,
  SPdPriceL,
} from './style';

function Section3() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section3Data, setSection3Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 64);
    idData.length !== 0 && setSection3Data(idData);
  }, [newPdData]);
  return (
    <SWrap>
      <SBgBox>
        {/*背景大底圖*/}
        <div className="relative left-0 right-[-2560px] top-0 flex h-full max-h-[1741px] w-full flex-col items-center justify-start">
          <img
            className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden object-fill"
            alt="section3BgMoya"
            src={section3BgMoya}
          />
        </div>
        <div className="absolute left-1/2 top-0 h-full w-full min-w-[1920px] -translate-x-1/2">
          <div className="absolute left-[112px] top-[193px] h-[1044px] w-[444px]">
            <img
              className="absolute left-0 top-[110px] h-[387px] w-[364px] object-cover"
              alt="section3BgStarYellow"
              src={section3BgStarYellow}
            />
            <img
              className="absolute left-[197px] top-[786px] h-[258px] w-[247px] object-cover"
              alt="section3BgStarPink"
              src={section3BgStarPink}
            />
            <img
              className="absolute left-[131px] top-0 h-[79px] w-[66px]"
              alt="section3BgDecoYellow"
              src={section3BgDecoYellow}
            />
          </div>
          <div className="absolute right-[275px] top-[686px] h-[446px] w-[177px]">
            <img
              className="absolute left-0 top-[293px] h-[153px] w-[144px] object-cover"
              alt="section3BgStarBlue"
              src={section3BgStarBlue}
            />
            <img
              className="absolute left-[41px] top-[120px] h-[79px] w-[66px] object-cover"
              alt="section3BgDecoBlue"
              src={section3BgDecoBlue}
            />
            <img
              className="absolute left-[111px] top-0 h-[79px] w-[66px]"
              alt="section3BgDecoPink"
              src={section3BgDecoPink}
            />
          </div>
        </div>
      </SBgBox>

      <SMainBox>
        <div className="container">
          <STitle>
            <h2>
              <img src={section3TitImg} alt="section3TitImg" />
            </h2>
            <h3>
              <span>窩在家吹冷氣，追劇好夥伴～</span>
            </h3>
          </STitle>

          <STable>
            <ul>
              {section3Data.length > 0 &&
                section3Data.map((item, index) => {
                  const formattedPrice = formatPriceText(item.discountPrice);
                  return (
                    <li key={index}>
                      <a href={item.url} rel="noopener noreferrer">
                        <SPdItem order={index}>
                          {index === 4 && (
                            <SPdTitleL>
                              <span>{item.productTitle}</span>
                              <img
                                alt="section3PdTitBg"
                                src={section3PdTitBg}
                              />
                            </SPdTitleL>
                          )}
                          <SPdImg>
                            <img src={section3PdImgSmallBg} alt="商品背景圖" />
                            <img
                              src={item.imgSrc}
                              alt={item.imgTitle || '商品圖'}
                            />
                          </SPdImg>

                          <SInfoBox order={index}>
                            {index !== 4 && (
                              <SPdTitle>
                                <span>{item.productTitle}</span>
                              </SPdTitle>
                            )}
                            <SPdName>
                              <span>{item.productName}</span>
                            </SPdName>
                            {index === 4 && (
                              <SPdPriceL>
                                <span>
                                  <b
                                    dangerouslySetInnerHTML={{
                                      __html: formattedPrice,
                                    }}
                                  ></b>
                                  <img
                                    className="pl-3"
                                    src={section3PdIconArrow}
                                    alt="section3PdIconArrow"
                                  />
                                </span>
                              </SPdPriceL>
                            )}
                            {index !== 4 && (
                              <SPdPrice>
                                <span>
                                  <b
                                    dangerouslySetInnerHTML={{
                                      __html: formattedPrice,
                                    }}
                                  ></b>
                                </span>
                              </SPdPrice>
                            )}
                          </SInfoBox>
                        </SPdItem>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </STable>
        </div>
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}

export default Section3;
