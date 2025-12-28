import tw, { styled } from 'twin.macro';

/*最外層容器*/
export const SWrap = styled.div`
  ${tw`relative`}
`;

/*背景容器 主要容器 前景容器*/
export const SBgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[1] overflow-hidden pointer-events-none`}
`;

export const SMainBox = styled.div`
  ${tw`relative z-[2]`}
`;

export const SFgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[3] overflow-hidden pointer-events-none`}
`;

//折價券
export const SCoupon = styled.ul`
  ${tw`flex flex-row flex-wrap items-center justify-center w-full gap-5 px-5`}
  ${tw`lg:(gap-6 px-6)`}
  ${tw`xl:(gap-8 px-8)`}
  li {
    ${tw`relative drop-shadow-[8px_8px_15px_rgba(255,_255,_255,_0.3)] w-[330px] h-[102px]`}
    ${tw`lg:(w-[440px] h-[136px])`}
    ${tw`xl:(w-[550px] h-[170px])`}
  }
  img {
    ${tw`absolute top-[0px] left-[0px] object-cover w-[330px] h-[102px]`}
    ${tw`lg:(w-[440px] h-[136px])`}
    ${tw`xl:(w-[550px] h-[170px])`}
  }
`;

export const SSwiperContainer = styled.div`
  .swiper-slider {
    ${tw`overflow-hidden flex flex-col pl-[40px] w-[220px] h-[360px]`}
    ${tw`xl:(w-[290px] h-[510px])`}
  }
`;

//卡片
export const SPdItem = styled.div`
  ${tw`relative flex flex-col gap-3 w-[180px]`}
  ${tw`xl:(w-[250px])`}
`;

//卡片-資訊區塊
export const SInfoBox = styled.div`
  ${tw`relative overflow-hidden flex flex-col rounded-[0px] w-full gap-3 px-5`}
  ${tw`xl:(px-10)`}
`;

//卡片-炸炸
export const SPdTitle = styled.h4`
  ${tw`absolute top-0 left-0 rounded-full overflow-hidden flex justify-center items-center text-center px-4 py-8 w-[112px] h-[112px]`}
  &::before {
    content: attr(before);
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 opacity-80 bg-blue-500`}
  }
  span {
    ${tw`relative block w-auto max-h-[52px] overflow-hidden font-bold text-white leading-[140%] text-[18px]`}
  }
`;

//卡片-圖片
export const SPdImg = styled.div`
  ${tw`relative`}
  img {
    ${tw`rounded-[0px]`}
  }
`;

//卡片-品名
export const SPdName = styled.h5`
  ${tw`relative rounded-[0px] overflow-hidden flex justify-center items-center text-center w-full h-[62px]`}
  &::before {
    content: attr(before);
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 opacity-0 bg-transparent`}
  }
  span {
    ${tw`relative block w-auto overflow-hidden font-bold text-white leading-[140%] text-[18px] max-h-[50px]`}
    ${tw`xl:(text-[22px] max-h-[60px])`}
  }
`;

//卡片-價格
export const SPdPrice = styled.h6`
  ${tw`relative overflow-hidden flex flex-row items-baseline justify-center px-1 font-bold italic text-center font-Jost text-yellow-300 whitespace-nowrap line-clamp-1 text-[24px] leading-[140%]`}
  span.dollar {
    ${tw`pr-0.5 text-[12px]`}
  }
`;
