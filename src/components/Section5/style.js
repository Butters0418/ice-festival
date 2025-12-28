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

//標題
export const STitle = styled.div`
  ${tw`relative flex flex-col items-center justify-center px-5 py-10 space-y-2.5`}
  ${tw`xl:(items-start justify-start)`}
  
  h2 {
    ${tw`flex items-center justify-center`}
  }
  h2 img {
    ${tw`!w-auto !h-auto max-h-full`}
  }
  h3 {
    ${tw`flex w-full items-center justify-center gap-0`}
    ${tw`sm:gap-5`}
  }
  h3 span {
    ${tw`grow-0 shrink-0 font-ZenMaruGothic font-bold text-[24px] leading-[140%]`}
    ${tw`md:text-[32px]`}
  }
  h3::before {
    ${tw`sm:content-[attr(before)] block w-full h-[3px] bg-white-100`}
  }
  h3::after {
    ${tw`sm:content-[attr(after)] block w-full h-[3px] bg-white-100`}
  }
`;

/*****************************************************/
//產品區
export const STable = styled.div`
  ${tw`relative`}

  ul {
    ${tw`relative flex flex-row flex-wrap items-start justify-between gap-x-0 gap-y-5`}
    ${tw`md:(gap-x-4 gap-y-10)`}
  }
  li {
    ${tw`relative overflow-hidden flex flex-row items-start justify-start w-[110px] h-auto`}
    ${tw`md:w-[165px]`}
    ${tw`xl:w-[260px]`}
  }
  li:nth-of-type(1) {
    ${tw`!w-full justify-center`}
    ${tw`md:py-[40px]`}
    ${tw`xl:(py-[60px] justify-start)`}
  }
`;

//卡片
export const SPdItem = styled.div`
  ${tw`relative overflow-hidden flex flex-col bg-white-100 gap-0 w-full rounded-[20px]`}
  ${tw`xl:rounded-[28px]`}
`;

//卡片-上層
export const STopBox = styled.div`
  ${tw`relative overflow-hidden rounded-[0px] flex flex-col items-start justify-start w-full p-2 gap-2`}
  ${tw`md:(p-2.5 gap-3)`}
  
  > img {
    ${tw`absolute top-0 left-0 z-0 w-full h-full overflow-hidden object-cover`}
  }
`;

//卡片-炸炸
export const SPdTitle = styled.h4`
  ${tw`relative z-10 flex items-center justify-center px-0 py-0 w-full h-[36px] font-medium leading-[18px] text-[15px]`}
  ${tw`md:(h-auto font-bold leading-[140%] text-[18px])`}
  
  ::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 rounded-md bg-transparent`}
  }
  ::after {
    ${tw`rounded-[50%] bg-transparent absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-0 w-9 h-9`}
  }
  span {
    ${tw`relative overflow-hidden z-10 flex w-full justify-center self-stretch items-start text-center text-red-200`}
  }
`;

//卡片-圖片
export const SPdImg = styled.div`
  ${tw`relative z-[1] m-auto`}

  img {
    ${tw`w-full h-full max-w-full max-h-full object-cover overflow-hidden rounded-[20px] bg-white-100`}
  }
`;

//卡片-下層
export const SInfoBox = styled.div`
  ${tw`relative overflow-hidden flex flex-col rounded-[0px] w-full gap-1 px-2 py-3`}
  ${tw`md:px-5`}
`;

//卡片-品名
export const SPdName = styled.h5`
  ${tw`relative rounded-[0px] overflow-hidden flex justify-center items-center text-center w-full h-[36px] font-medium leading-[18px] text-[15px]`}
  ${tw`md:(h-[50px] font-bold leading-[140%] text-[18px])`}
  
  ::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 opacity-60 bg-transparent`}
  }
  span {
    ${tw`relative block w-auto overflow-hidden text-bk-400 h-full`}
  }
`;

//卡片-價格
export const SPdPrice = styled.h6`
  ${tw`relative overflow-hidden flex flex-row items-baseline justify-center text-center px-1 font-bold italic font-Jost text-blue-800 whitespace-nowrap line-clamp-1 text-[16px] leading-[140%]`}
  ${tw`md:text-[20px]`}
  
  span.dollar, span.chi {
    ${tw`pr-0.5 text-[12px] leading-[140%]`}
  }
`;

/*****************************************************/

//卡片-炸炸-主打大
export const SPdTitleMain = styled.h4`
  ${tw`relative z-10 flex items-center justify-center w-[152px] h-[89px] leading-[140%] font-medium text-[18px] pl-6`}
  ${tw`md:(w-[255px] h-[151px] font-bold text-[22px] pl-10)`}
  
  ::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 rounded-md bg-transparent`}
  }
  ::after {
    ${tw`rounded-[50%] bg-transparent absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-0 w-9 h-9`}
  }
  span {
    ${tw`relative overflow-hidden z-10 flex w-full h-3/5 justify-center self-stretch items-center text-center text-white-100`}
  }
`;

//卡片-品名-主打大
export const SPdNameMain = styled.h5`
  ${tw`relative rounded-[0px] overflow-hidden flex justify-center items-center text-right w-[152px] h-[42px] font-medium leading-[18px] text-[15px] mt-2`}
  ${tw`md:(w-[255px] h-[68px] font-bold leading-[140%] text-[24px] mt-3)`}
  
  ::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 opacity-60 bg-transparent`}
  }
  span {
    ${tw`relative block w-auto overflow-hidden text-bk-400 h-full`}
  }
`;

//卡片-價格-主打大
export const SPdPriceMain = styled.h6`
  ${tw`relative overflow-hidden flex flex-row items-baseline justify-end text-right px-1 w-[152px] font-bold italic font-Jost text-blue-800 whitespace-nowrap line-clamp-1 text-[20px] leading-[140%]`}
  ${tw`md:(w-[255px] text-[36px])`}
  
  span.dollar, span.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;
