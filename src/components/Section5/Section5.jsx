// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// image 資源
import {
  transparentpic,
  section5BgDeco,
  section5BgDecoLeft,
  section5BgDecoRight,
  section5TitImgLarge,
  section5TitImgSmall,
  section5PdBgDeco,
  section5PdTopboxBgBlue,
  section5PdTopboxBgGreen,
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
  SInfoBox,
  SPdTitle,
  SPdImg,
  SPdName,
  SPdPrice,
  SPdTitleMain,
  SPdNameMain,
  SPdPriceMain,
} from './style';

function Section5() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section5Data, setSection5Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 242);
    idData.length !== 0 && setSection5Data(idData);
  }, [newPdData]);
  return (
    <SWrap>
      <SBgBox className="bgBox">
        <div className="relative z-[1] flex h-full w-full flex-col">
          <div className="h-[330px] shrink-0 self-stretch [background:linear-gradient(180deg,_rgba(243,_243,_243,_0),_#f3f3f3)]" />
          <div className="h-full self-stretch bg-white-200" />
          <div className="h-[300px] shrink-0 self-stretch [background:linear-gradient(180deg,_#f3f3f3,_#18dfe4)]" />
        </div>
        <div className="absolute left-1/2 top-[300px] z-[2] flex w-[1400px] -translate-x-1/2 flex-row items-start justify-between overflow-hidden md:top-[410px] md:w-[1800px] xl:top-0 xl:w-[2560px]">
          <img
            className="relative h-[1089px] w-[523px]"
            alt="bgDecoLeft"
            src={section5BgDecoLeft}
          />
          <img
            className="relative h-[1059px] w-[510px]"
            alt="bgDecoRight"
            src={section5BgDecoRight}
          />
        </div>
      </SBgBox>

      <SMainBox>
        <div className="container !py-[80px]">
          <picture>
            <source srcSet={section5BgDeco} media="(min-width:1280px)" />
            <img
              className="absolute right-0 top-0 w-[640px]"
              alt="bgDeco"
              src={transparentpic}
            />
          </picture>
          <STitle>
            <h2 className="h-[100px] md:h-[160px] xl:h-[228px]">
              <picture>
                <source
                  srcSet={section5TitImgLarge}
                  media="(min-width:1280px)"
                />
                <img src={section5TitImgSmall} alt="titImg" />
              </picture>
            </h2>
            <h3>
              <span>清爽氣泡飲，消暑不能沒有～</span>
            </h3>
          </STitle>

          {section5Data.length > 0 && (
            <STable>
              <ul>
                {/* products */}
                {section5Data.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>
                        <SPdItem
                          className={`${
                            index === 0
                              ? '!flex-row border-[4px] border-solid border-[#4DABFB] !p-0 md:w-[708px] xl:w-[560px]'
                              : ''
                          }`}
                        >
                          <img
                            src={section5PdBgDeco}
                            alt="pdBgDeco"
                            className="absolute right-0 top-0 z-0 h-[90px] w-[152px] overflow-hidden object-cover md:h-[151px] md:w-[255px]"
                          />
                          <STopBox
                            className={`${index === 0 ? '!p-2.5 md:!p-5' : ''}`}
                          >
                            {index > 0 && index % 2 === 0 && (
                              <img
                                src={section5PdTopboxBgBlue}
                                alt="pdTopboxBg"
                              />
                            )}
                            {index > 0 && index % 2 === 1 && (
                              <img
                                src={section5PdTopboxBgGreen}
                                alt="pdTopboxBg"
                              />
                            )}
                            {index > 0 && (
                              <SPdTitle>
                                <span>{item.productTitle}</span>
                              </SPdTitle>
                            )}
                            <SPdImg>
                              <img src={item.imgSrc} alt="商品圖" />
                            </SPdImg>
                          </STopBox>
                          <SInfoBox
                            className={`${index === 0 ? '!gap-0 !p-0' : ''}`}
                          >
                            {index === 0 && (
                              <>
                                <SPdTitleMain>
                                  <span>{item.productTitle}</span>
                                </SPdTitleMain>
                                <SPdNameMain>
                                  <span>{item.productName}</span>
                                </SPdNameMain>
                                <SPdPriceMain
                                  dangerouslySetInnerHTML={{
                                    __html: formatPriceText(item.discountPrice),
                                  }}
                                />
                              </>
                            )}
                            {index > 0 && (
                              <>
                                <SPdName>
                                  <span>{item.productName}</span>
                                </SPdName>
                                <SPdPrice
                                  dangerouslySetInnerHTML={{
                                    __html: formatPriceText(item.discountPrice),
                                  }}
                                />
                              </>
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

export default Section5;
