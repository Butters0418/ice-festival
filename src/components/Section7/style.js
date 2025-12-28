import tw, { styled } from 'twin.macro';

/* 最外層容器 */
export const SWrap = styled.div`
  ${tw`relative`}
`;

/* 背景容器 主要容器 前景容器 */
export const SBgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[1] overflow-hidden pointer-events-none`}
`;

export const SMainBox = styled.div`
  ${tw`relative z-[2]`}
`;

export const SFgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[3] overflow-hidden pointer-events-none`}
`;

/* 背景裝飾層 */
export const SBgTopImg = styled.div`
  ${tw`h-[262px] w-full min-w-[1920px] shrink-0 self-stretch`}
  img {
    ${tw`h-full max-h-full w-full max-w-full`}
  }
`;

export const SBgBottomImg = styled.div`
  ${tw`h-[262px] w-full min-w-[1920px] shrink-0 self-stretch`}
  img {
    ${tw`h-full max-h-full w-full max-w-full`}
  }
`;

export const SBgCenter = styled.div`
  ${tw`relative left-1/2 top-0 h-full min-w-[1920px] -translate-x-1/2 self-stretch overflow-hidden`}
  background: linear-gradient(180deg, #b1fff7, #fff 51.04%, #ffe5fc);
`;

export const SBgCenterPattern = styled.div`
  ${tw`absolute bottom-0 left-0 right-0 top-0 z-[1] bg-center`}
`;

export const SBgCenterDeco01 = styled.img`
  ${tw`absolute left-[-268px] top-1/2 z-[2] h-[508px] w-[536px] -translate-y-1/2`}
`;

export const SBgCenterDeco02 = styled.img`
  ${tw`absolute right-[0px] top-1/2 z-[2] mt-[60px] h-[446px] w-[446px]`}
`;

export const SBgCenterDeco03 = styled.img`
  ${tw`absolute right-[38px] top-1/2 z-[2] mt-[312px] h-[318px] w-[318px]`}
`;

/* 主打產品區 */
export const SFeaturedProduct = styled.a`
  ${tw`text-center text-[95px] text-gray`}
`;

export const SFeaturedInner = styled.div`
  ${tw`relative flex w-full flex-col items-end justify-center text-center xl:flex-row`}
`;

export const SFeaturedLeft = styled.div`
  ${tw`flex w-full flex-col items-start justify-end md:w-[660px]`}
`;

export const SFeaturedTitleBox = styled.div`
  ${tw`flex flex-col items-start justify-start gap-[10px] self-stretch overflow-hidden px-5 py-10`}
  img {
    ${tw`relative h-[50px]`}
    ${tw`md:h-[100px]`}
  }
`;

export const SFeaturedSubtitle = styled.div`
  ${tw`flex flex-row items-center justify-center gap-[20px] self-stretch px-5 py-3 text-5xl font-bold`}
  ${tw`md:(px-0 py-0 text-[32px])`}
  b {
    ${tw`relative font-ZenMaruGothic leading-[140%]`}
  }
`;

export const SFeaturedDivider = styled.div`
  ${tw`relative box-border h-[3px] flex-1 border-t-[3px] border-solid border-white-100`}
`;

export const SFeaturedInfoBox = styled.div`
  ${tw`relative flex flex-col items-start justify-end gap-[8px] self-stretch px-5 py-3 text-5xl`}
  ${tw`md:text-[32px]`}
  b {
    ${tw`relative z-[3] self-stretch leading-[140%]`}
  }
`;

export const SFeaturedDividerLine = styled.div`
  ${tw`relative z-[2] box-border h-0.5 self-stretch border-t-[2px] border-solid border-black`}
`;

export const SFeaturedProductTitle = styled.b`
  ${tw`relative z-[3] self-stretch leading-[140%]`}
`;

export const SFeaturedProductName = styled.b`
  ${tw`relative z-[1] self-stretch text-xl leading-[140%]`}
`;

export const SFeaturedDecoCool = styled.img`
  ${tw`absolute left-[0px] top-[0px] z-[4] mx-[!important] my-0 hidden h-28 w-28`}
  ${tw`md:block`}
`;

export const SFeaturedRight = styled.div`
  ${tw`relative m-auto flex h-[306px] w-[306px] flex-1 flex-row items-end justify-center gap-[10px] self-stretch`}
  ${tw`md:(h-[440px] w-[440px])`}
  ${tw`xl:(h-auto w-auto)`}
`;

export const SFeaturedImageWrapper = styled.div`
  ${tw`z-0 flex shrink-0 h-[306px] w-[306px] flex-row items-start justify-start overflow-hidden rounded-full bg-center bg-no-repeat p-[30px]`}
  ${tw`md:(h-[440px] w-[440px] p-[60px])`}
  ${tw`xl:(h-[540px] w-[540px])`}
  img {
    ${tw`relative max-h-full max-w-full flex-1 self-stretch overflow-hidden rounded-full object-cover`}
  }
`;

export const SFeaturedDecoWording = styled.div`
  ${tw`absolute right-[-20px] top-1/2 z-[1] flex h-[300px] -translate-y-1/2 flex-row items-end justify-end`}
  ${tw`md:right-0`}
  img {
    ${tw`relative h-[300px]`}
  }
`;

/* 產品列表區 */
export const STable = styled.div`
  ${tw`relative`}
  ul {
    ${tw`relative flex flex-row flex-wrap items-start justify-between gap-y-5 py-10`}
    ${tw`xl:gap-y-8`}
  }
`;

/* 產品卡片 */
export const SProductCard = styled.li`
  a {
    ${tw`block`}
  }
`;

export const SCardBorderOuter = styled.div`
  ${tw`overflow-hidden rounded-[46px] bg-lightskyblue p-[3px]`}
`;

export const SCardBorderLayer1 = styled.div`
  ${tw`h-full w-full overflow-hidden rounded-[45px] bg-lightblue p-[2px]`}
`;

export const SCardBorderLayer2 = styled.div`
  ${tw`h-full w-full overflow-hidden rounded-[43px] bg-white-100 p-[4px]`}
`;

export const SCardBorderLayer3 = styled.div`
  ${tw`h-full w-full overflow-hidden rounded-[38px] bg-lightblue p-[3px]`}
`;

export const SCardInner = styled.div`
  ${tw`h-full w-full overflow-hidden rounded-[36px] bg-[top] bg-no-repeat px-[5px] py-[8px]`}
  background-size: 100% 100%;
`;

export const SCardContent = styled.div`
  ${tw`relative flex h-44 w-[320px] flex-row items-start justify-start text-center text-[20px] font-bold text-white-100`}
  ${tw`xl:w-[345px]`}
`;

export const SCardImageBox = styled.div`
  ${tw`h-44 w-44 shrink-0`}
  img {
    ${tw`relative h-44 w-44 shrink-0 overflow-hidden rounded-[30px] object-cover`}
  }
`;

export const SCardInfoBox = styled.div`
  ${tw`flex w-full flex-col justify-between gap-2 px-2 pt-3`}
`;

export const SCardProductName = styled.b`
  ${tw`relative inline-block h-[56px] w-full overflow-hidden text-center text-xl leading-[140%] text-bk-400 mix-blend-normal`}
`;

export const SCardPriceBox = styled.div`
  ${tw`relative h-[34px] w-full overflow-hidden rounded-xl bg-red-400 text-center text-[16px] font-Jost text-white-100`}
`;

export const SCardTitleBox = styled.div`
  ${tw`relative box-border flex h-[58px] w-full flex-row items-start justify-start overflow-hidden bg-yellow-100 px-2 py-1 text-center text-lg  text-white-100`}
  b {
    ${tw`relative flex-1 leading-[140%]`}
  }
`;

/* 卡片-價格 */
export const SPdPrice = styled.h6`
  ${tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-Jost font-bold leading-[140%] text-[24px] italic`}
  span.dollar, span.chi {
    ${tw`pr-0.5 text-[12px]`}
  }
`;

/* 卡片-價格-主打大 */
export const SPdPriceMain = styled.h6`
  ${tw`font-Jost relative z-[0] self-stretch text-[36px] font-bold text-blue-800 italic  leading-[120%]`}
  span.dollar, span.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;
