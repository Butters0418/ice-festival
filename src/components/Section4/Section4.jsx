// react 相關
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// image
import {
  section4BgBubble,
  section4TitImg,
  section4PdTopboxBgBlue,
  section4PdTopboxBgGreen,
} from '../../assets/layout';

// style
import { SWrap, SBgBox, SMainBox, SFgBox } from './style';
import { STitle, STable, SCoupon } from './style';
import {
  SPdItem,
  STopBox,
  SInfoBox,
  SPdTitle,
  SPdImg,
  SPdName,
  SPdPrice,
} from './style';

function Section4() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [couponData, setCouponData] = useState([]);
  const [section4Data, setSection4Data] = useState([]);

  useEffect(() => {
    const idCouponData = getDataById(newPdData, 220);
    const idPdData = getDataById(newPdData, 231);

    idCouponData.length !== 0 && setCouponData(idCouponData);
    idPdData.length !== 0 && setSection4Data(idPdData);
  }, [newPdData]);
  return (
    <SWrap>
      <SMainBox>
        <div className="container !max-w-full xl:!max-w-[1240px]">
          <SCoupon>
            {couponData.length > 0 &&
              couponData.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url} rel="noopener noreferrer">
                      <img alt={item.productName} src={item.imgSrc} />
                    </a>
                  </li>
                );
              })}
          </SCoupon>
        </div>

        <div className="container">
          <SBgBox>
            <div className="container">
              <div className="absolute left-1/2 top-0 h-[0] w-full -translate-x-1/2 overflow-hidden pt-[31.5%]">
                <img
                  className="absolute left-0 top-0 w-full"
                  alt="section4BgBubble"
                  src={section4BgBubble}
                />
              </div>
            </div>
          </SBgBox>

          <STitle>
            <h2>
              <img src={section4TitImg} alt="section4TitImg" />
            </h2>
            <h3>
              <span>炎夏從冰鎮天然美味茶開始！</span>
            </h3>
          </STitle>

          <STable>
            <ul>
              {section4Data.length > 0 &&
                section4Data.map((item, index) => {
                  const formattedPrice = formatPriceText(item.discountPrice);
                  return (
                    <li key={index}>
                      <a href={item.url} rel="noopener noreferrer">
                        <SPdItem>
                          <STopBox>
                            {index % 2 === 0 && (
                              <img
                                src={section4PdTopboxBgBlue}
                                alt="section4PdTopboxBgBlue"
                              />
                            )}
                            {index % 2 === 1 && (
                              <img
                                src={section4PdTopboxBgGreen}
                                alt="section4PdTopboxBgGreen"
                              />
                            )}
                            <SPdTitle>
                              <span>{item.productTitle}</span>
                            </SPdTitle>
                            <SPdImg>
                              <img
                                src={item.imgSrc}
                                alt={item.imgTitle || '商品圖'}
                              />
                            </SPdImg>
                          </STopBox>
                          <SInfoBox>
                            <SPdName>
                              <span>{item.productName}</span>
                            </SPdName>
                            <SPdPrice
                              dangerouslySetInnerHTML={{
                                __html: formattedPrice,
                              }}
                            />
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

export default Section4;
