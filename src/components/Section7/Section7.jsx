// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// image
import {
  section7IcecreamBgTop,
  section7IcecreamBgBottom,
  section7IcecreamBgCenterPattern,
  section7IcecreamBgCenterDeco01,
  section7IcecreamBgCenterDeco02,
  section7IcecreamBgCenterDeco03,
  section7IcecreamTitImg,
  section7IcecreamPdBg,
  section7IcecreamPdBgCircle,
  section7IcecreamPdDecoCool,
  section7IcecreamPdDecoWording,
} from '../../assets/layout';

// style
import {
  SWrap,
  SBgBox,
  SMainBox,
  SFgBox,
  SBgTopImg,
  SBgBottomImg,
  SBgCenter,
  SBgCenterPattern,
  SBgCenterDeco01,
  SBgCenterDeco02,
  SBgCenterDeco03,
  SFeaturedProduct,
  SFeaturedInner,
  SFeaturedLeft,
  SFeaturedTitleBox,
  SFeaturedSubtitle,
  SFeaturedDivider,
  SFeaturedInfoBox,
  SFeaturedDividerLine,
  SFeaturedProductTitle,
  SFeaturedProductName,
  SFeaturedDecoCool,
  SFeaturedRight,
  SFeaturedImageWrapper,
  SFeaturedDecoWording,
  STable,
  SProductCard,
  SCardBorderOuter,
  SCardBorderLayer1,
  SCardBorderLayer2,
  SCardBorderLayer3,
  SCardInner,
  SCardContent,
  SCardImageBox,
  SCardInfoBox,
  SCardProductName,
  SCardPriceBox,
  SCardTitleBox,
  SPdPrice,
  SPdPriceMain,
} from './style';

function Section7() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [section7Data, setSection7Data] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 110);
    idData.length !== 0 && setSection7Data(idData);
  }, [newPdData]);

  return (
    <SWrap>
      <SBgBox>
        <div className="relative z-[1] flex h-full w-full flex-col">
          <SBgTopImg>
            <img src={section7IcecreamBgTop} alt="section7IcecreamBgTop" />
          </SBgTopImg>
          <SBgCenter>
            <SBgCenterPattern
              style={{
                backgroundImage: `url(${section7IcecreamBgCenterPattern})`,
              }}
            />
            <SBgCenterDeco01
              alt="section7IcecreamBgCenterDeco01"
              src={section7IcecreamBgCenterDeco01}
            />
            <SBgCenterDeco02
              alt="section7IcecreamBgCenterDeco02"
              src={section7IcecreamBgCenterDeco02}
            />
            <SBgCenterDeco03
              alt="section7IcecreamBgCenterDeco03"
              src={section7IcecreamBgCenterDeco03}
            />
          </SBgCenter>
          <SBgBottomImg>
            <img
              src={section7IcecreamBgBottom}
              alt="section7IcecreamBgBottom"
            />
          </SBgBottomImg>
        </div>
      </SBgBox>

      <SMainBox>
        <div className="container !py-[262px]">
          {section7Data.length > 0 &&
            section7Data.map((item, index) => {
              const formattedPrice = formatPriceText(item.discountPrice);
              if (index < 1)
                return (
                  <SFeaturedProduct
                    key={index}
                    href={item.url}
                    rel="noreferrer"
                  >
                    <SFeaturedInner>
                      <SFeaturedLeft>
                        <SFeaturedTitleBox>
                          <img
                            src={section7IcecreamTitImg}
                            alt="section7IcecreamTitImg"
                          />
                          <SFeaturedSubtitle>
                            <SFeaturedDivider />
                            <b>冰涼入口 消暑x銷魂雙倍極致感受</b>
                            <SFeaturedDivider className="hidden md:block" />
                          </SFeaturedSubtitle>
                        </SFeaturedTitleBox>
                        <SFeaturedInfoBox>
                          <SFeaturedDecoCool
                            alt="bgDeco"
                            src={section7IcecreamPdDecoCool}
                          />
                          <SFeaturedProductTitle>
                            {item.productTitle}
                          </SFeaturedProductTitle>
                          <SFeaturedDividerLine />
                          <SFeaturedProductName>
                            {item.productName}
                          </SFeaturedProductName>
                          <SPdPriceMain
                            dangerouslySetInnerHTML={{
                              __html: formattedPrice,
                            }}
                          />
                        </SFeaturedInfoBox>
                      </SFeaturedLeft>
                      <SFeaturedRight>
                        <SFeaturedImageWrapper
                          style={{
                            backgroundImage: `url(${section7IcecreamPdBgCircle})`,
                          }}
                        >
                          <img alt={item.productName} src={item.imgSrc} />
                        </SFeaturedImageWrapper>
                        <SFeaturedDecoWording>
                          <img
                            alt="section7IcecreamPdDecoWording"
                            src={section7IcecreamPdDecoWording}
                          />
                        </SFeaturedDecoWording>
                      </SFeaturedRight>
                    </SFeaturedInner>
                  </SFeaturedProduct>
                );
              return null;
            })}

          {section7Data.length > 0 && (
            <STable>
              <ul>
                {section7Data.map((item, index) => {
                  const formattedPrice = formatPriceText(item.discountPrice);
                  if (index > 0)
                    return (
                      <SProductCard key={index}>
                        <a href={item.url}>
                          <SCardBorderOuter>
                            <SCardBorderLayer1>
                              <SCardBorderLayer2>
                                <SCardBorderLayer3>
                                  <SCardInner
                                    style={{
                                      backgroundImage: `url(${section7IcecreamPdBg})`,
                                    }}
                                  >
                                    <SCardContent>
                                      <SCardImageBox>
                                        <img
                                          src={item.imgSrc}
                                          alt={item.productName}
                                        />
                                      </SCardImageBox>
                                      <SCardInfoBox>
                                        <SCardProductName>
                                          {item.productName}
                                        </SCardProductName>
                                        <SCardPriceBox>
                                          <SPdPrice
                                            dangerouslySetInnerHTML={{
                                              __html: formattedPrice,
                                            }}
                                          />
                                        </SCardPriceBox>
                                        <SCardTitleBox>
                                          <b
                                            style={{
                                              textShadow: `1px 1px 1px #ff75c8,-1px 1px 1px #ff75c8,1px -1px 1px #ff75c8,-1px -1px 1px #ff75c8`,
                                            }}
                                          >
                                            {item.productTitle}
                                          </b>
                                        </SCardTitleBox>
                                      </SCardInfoBox>
                                    </SCardContent>
                                  </SCardInner>
                                </SCardBorderLayer3>
                              </SCardBorderLayer2>
                            </SCardBorderLayer1>
                          </SCardBorderOuter>
                        </a>
                      </SProductCard>
                    );
                  return null;
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

export default Section7;
