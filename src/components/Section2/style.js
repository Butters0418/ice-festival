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
  ${tw`relative flex flex-col items-center justify-start px-5 py-10 space-y-2.5`}

  h2 {
    ${tw`flex items-center justify-center h-[50px]`}
    ${tw`md:h-[80px]`}
    ${tw`xl:h-[114px]`}

    img {
      ${tw`!w-auto !h-auto max-h-full`}
    }
  }

  h3 {
    ${tw`flex w-full items-center justify-center gap-0`}
    ${tw`sm:gap-5`}

    span {
      ${tw`grow-0 shrink-0 font-ZenMaruGothic font-bold text-[24px] leading-[140%]`}
      ${tw`md:text-[32px]`}
    }

    &::before {
      ${tw`sm:content-[attr(before)] block w-full h-[3px] bg-white-100`}
    }

    &::after {
      ${tw`sm:content-[attr(after)] block w-full h-[3px] bg-white-100`}
    }
  }
`;

//輪播器
export const SSwiperContainer = styled.div`
  .swiper-slider {
    ${tw`overflow-hidden flex flex-col pl-[30px] w-[260px]`}
    ${tw`xl:(w-[336px] pl-[60px])`}
  }
`;

//卡片
export const SPdItem = styled.div`
  ${tw`relative flex flex-col gap-3 w-[200px]`}
  ${tw`xl:w-[276px]`}
`;

//卡片-資訊區塊
export const SInfoBox = styled.div`
  ${tw`relative overflow-hidden flex flex-col rounded-[48px] w-full gap-3 pb-6 px-3 pt-3`}
  ${tw`md:(px-4 pt-4)`}
  ${({ color }) => color === 'blue' && tw`md:bg-blue-400`}
  ${({ color }) => color === 'red' && tw`md:bg-red-500`}
  ${({ color }) => color === 'purple' && tw`md:bg-purple-400`}
  ${({ color }) => color === 'green' && tw`md:bg-green-400`}
`;

//卡片-炸炸
export const SPdTitle = styled.h4`
  ${tw`relative z-10 rounded-full flex items-center justify-center px-5 py-4 w-full h-[64px]`}

  &::before {
    ${tw`content-[attr(before)] absolute top-0 left-0 bottom-0 right-0 z-0 rounded-full bg-white-100`}
  }

  &::after {
    ${tw`content-[attr(after)] rounded-[50%] bg-white-100 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-0 w-9 h-9`}
  }

  span {
    ${tw`relative h-full w-full overflow-hidden flex flex-1 items-center justify-center self-stretch text-center text-ellipsis whitespace-nowrap font-bold text-bk-400 leading-[18px] text-base`}
  }
`;

//卡片-圖片
export const SPdImg = styled.div`
  ${tw`relative`}

  img {
    ${tw`rounded-[36px]`}
  }
`;

//卡片-品名
export const SPdName = styled.h5`
  ${tw`relative rounded-[32px] overflow-hidden flex justify-center items-center text-center p-3 w-full h-[60px]`}

  &::before {
    ${tw`content-[attr(before)] absolute top-0 left-0 bottom-0 right-0 z-0 opacity-60 bg-white-100`}
  }

  span {
    ${tw`relative block w-auto overflow-hidden font-bold text-bk-400 max-h-[54px] leading-[140%] text-[18px]`}
    ${tw`md:text-[20px]`}
  }
`;

//卡片-價格
export const SPdPrice = styled.h6`
  ${tw`relative overflow-hidden flex flex-row items-baseline justify-end text-right gap-3 px-1 font-bold italic font-Jost text-red-800 whitespace-nowrap line-clamp-1 text-[24px] leading-[140%]`}
  ${tw`md:text-[36px]`}
  span.dollar, span.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;

export const SRainbowLine = styled.div`
  ${tw`flex flex-col w-full`}

  b {
    ${tw`block w-full h-3`}

    &:nth-of-type(1) {
      ${tw`bg-rainbowLine1`}
    }

    &:nth-of-type(2) {
      ${tw`bg-rainbowLine2`}
    }

    &:nth-of-type(3) {
      ${tw`bg-rainbowLine3`}
    }

    &:nth-of-type(4) {
      ${tw`bg-rainbowLine4`}
    }

    &:nth-of-type(5) {
      ${tw`bg-rainbowLine5`}
    }
  }
`;
