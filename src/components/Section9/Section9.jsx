import { useEffect, useState } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// image 資源
import {
  section9BefreeBgCenterPattern,
  section9BefreeBgBottomGradient,
  section9BefreeBgTop,
  section9BefreeBgBottom,
  section9BefreeBgCenterDecoLeft,
  section9BefreeBgCenterDecoRight,
  section9BefreePdTitBg,
  section9BefreePdTopboxBgYellow,
  section9BefreeTitImg,
  section9PdIconArrow,
} from '../../assets/layout';

// style 資源
import {
  SWrap,
  SBgBox,
  SMainBox,
  SFgBox,
  STitle,
  STable,
  SPdItem,
  STopBox,
  SPdImg,
  SPdTitle,
  SInfoBox,
  SPdName,
  SPdPrice,
  SPdPriceLarge,
} from './style';

function Section9() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section9Data, setSection9Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 289);
    idData.length !== 0 && setSection9Data(idData);
  }, [newPdData]);

  return (
    <SWrap>
      <SBgBox>
        <div className="relative z-[1] flex h-full w-full flex-col">
          <div className="h-[262px] w-full min-w-[1920px] shrink-0 self-stretch [background:linear-gradient(180deg,_rgba(255,255,255,0),_#AFF9FF_74.48%,_#67CDFD)]">
            <img
              className="h-full max-h-full w-full max-w-full"
              src={section9BefreeBgTop}
              alt="icecreamBgTop"
            />
          </div>
          <div className="relative left-1/2 top-0 h-full min-w-[1920px] -translate-x-1/2 self-stretch overflow-hidden">
            <div
              className="absolute inset-0 z-[1] bg-top py-[121px]"
              style={{
                backgroundImage: `url(${section9BefreeBgCenterPattern})`,
                backgroundSize: `30px 30px`,
              }}
            />
            <img
              className="absolute left-0 top-[120px] z-[2] h-[1416px] w-[602px]"
              alt="befreeBgCenterDecoLeft"
              src={section9BefreeBgCenterDecoLeft}
            />
            <img
              className="absolute right-0 top-[120px] z-[2] h-[1416px] w-[602px]"
              alt="befreeBgCenterDecoRight"
              src={section9BefreeBgCenterDecoRight}
            />
          </div>
          <div
            className="h-[415px] w-full min-w-[1920px] shrink-0 self-stretch bg-bottom"
            style={{
              backgroundImage: `url(${section9BefreeBgBottomGradient})`,
            }}
          >
            <img
              className="h-[262px] w-full max-w-full"
              src={section9BefreeBgBottom}
              alt="icecreamBgBottom"
            />
          </div>
        </div>
      </SBgBox>

      <SMainBox>
        <div className="container !px-0 !pb-[415px] !pt-[262px] md:px-5">
          <STitle>
            <h2>
              <img src={section9BefreeTitImg} alt="befreeTitImg" />
            </h2>
            <h3>
              <span>外出/露營必備～</span>
            </h3>
          </STitle>

          {section9Data.length > 0 && (
            <STable>
              <ul className="justify-between xl:justify-center xl:gap-x-10">
                {section9Data.map((item, index) => {
                  const formattedPrice = formatPriceText(item.discountPrice);

                  return (
                    <li key={`${item.id}-${index}`}>
                      <a href={item.url} rel="noreferrer">
                        <SPdItem order={index}>
                          <STopBox
                            order={index}
                            style={{
                              backgroundImage: `url(${section9BefreePdTopboxBgYellow})`,
                            }}
                          >
                            <SPdImg order={index}>
                              <img
                                className="h-full max-h-full w-full max-w-full overflow-hidden object-cover"
                                src={item.imgSrc}
                                alt={
                                  item.imgTitle || item.productName || '商品圖'
                                }
                              />
                            </SPdImg>
                            <SPdTitle
                              order={index}
                              style={{
                                backgroundImage: `url(${section9BefreePdTitBg})`,
                              }}
                            >
                              <span className="flex h-full w-full items-center overflow-hidden leading-[140%]">
                                {item.productTitle}
                              </span>
                            </SPdTitle>
                          </STopBox>

                          <SInfoBox order={index}>
                            <SPdName order={index}>
                              <span className="relative block max-h-full w-auto overflow-hidden leading-[140%]">
                                {item.productName}
                              </span>
                            </SPdName>

                            {index < 2 ? (
                              <SPdPriceLarge>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: formattedPrice,
                                  }}
                                />
                                <img
                                  src={section9PdIconArrow}
                                  alt="pdIconArrow"
                                />
                              </SPdPriceLarge>
                            ) : (
                              <SPdPrice
                                dangerouslySetInnerHTML={{
                                  __html: formattedPrice,
                                }}
                              />
                            )}
                          </SInfoBox>
                        </SPdItem>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </STable>
          )}
        </div>
      </SMainBox>

      <SFgBox />
    </SWrap>
  );
}

export default Section9;
