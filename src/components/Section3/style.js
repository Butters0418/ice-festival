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

//產品區
export const STable = styled.div`
  ${tw`relative`}

  ul {
    ${tw`relative flex flex-row flex-wrap items-start justify-between gap-y-5`}
    ${tw`md:gap-y-10`}
  }

  li {
    ${tw`relative flex flex-row items-start justify-center`}

    &:nth-of-type(1) {
      ${tw`w-[162px]`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }

    &:nth-of-type(2) {
      ${tw`w-[162px]`}
      ${tw`md:w-[266px]`}
      ${tw`xl:w-[500px]`}
    }

    &:nth-of-type(3) {
      ${tw`w-[162px]`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }

    &:nth-of-type(4) {
      ${tw`w-[162px]`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }

    &:nth-of-type(5) {
      ${tw`w-full`}
      ${tw`md:w-[266px]`}
      ${tw`xl:w-[500px]`}
    }

    &:nth-of-type(6) {
      ${tw`w-[162px]`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }

    &:nth-of-type(7) {
      ${tw`w-[162px]`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }

    &:nth-of-type(8) {
      ${tw`w-full`}
      ${tw`md:w-[195px]`}
      ${tw`xl:w-[272px]`}
    }
  }
`;

//卡片
export const SPdItem = styled.div`
  ${tw`relative flex flex-col gap-2 w-[162px]`}
  ${tw`md:w-[195px]`}
  ${tw`xl:w-[272px]`}
  ${({ order }) =>
    order === 4 &&
    tw`w-[266px] md:(w-[266px] absolute top-0 left-1/2 -translate-x-1/2) xl:w-[500px]`}
`;

//卡片-資訊區塊
export const SInfoBox = styled.div`
  ${tw`relative overflow-hidden flex flex-col rounded-[0px] w-full gap-[7px] px-4`}
  ${tw`md:px-4`}
  ${({ order }) => order === 4 && tw`px-5 gap-5`}
`;

//卡片-炸炸
export const SPdTitle = styled.h4`
  ${tw`relative z-10 rounded-md border-[2px] border-solid border-bk-400 flex items-center justify-center px-2 py-1 w-full h-auto`}

  &::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 rounded-md bg-transparent`}
  }

  &::after {
    ${tw`rounded-[50%] bg-transparent absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-0 w-9 h-9`}
  }

  span {
    ${tw`relative h-full w-full overflow-hidden z-10 flex flex-1 items-center justify-center self-stretch text-center text-ellipsis whitespace-nowrap font-bold text-bk-400 leading-[140%] text-[18px]`}
    ${tw`xl:text-[22px]`}
  }
`;

//卡片-圖片
export const SPdImg = styled.div`
  ${tw`relative z-[1] p-5`}

  img {
    ${tw`w-full h-full max-w-full max-h-full object-cover overflow-hidden`}

    &:nth-of-type(1) {
      ${tw`absolute top-0 left-0 z-0`}
    }

    &:nth-of-type(2) {
      ${tw`relative z-10 rounded-full bg-white-100`}
    }
  }
`;

//卡片-品名
export const SPdName = styled.h5`
  ${tw`relative rounded-[0px] overflow-hidden flex justify-center items-center text-center px-0 w-full h-[50px]`}
  ${tw`xl:h-[68px]`}

  &::before {
    ${tw`absolute top-0 left-0 bottom-0 right-0 z-0 opacity-60 bg-transparent`}
  }

  span {
    ${tw`relative block w-auto overflow-hidden font-bold text-bk-400 leading-[140%] text-[18px] max-h-[50px]`}
    ${tw`xl:(text-[24px] max-h-[68px])`}
  }
`;

//卡片-價格
export const SPdPrice = styled.h6`
  ${tw`relative overflow-hidden flex flex-row items-center justify-center text-center px-1 font-bold italic font-Jost text-bk-400 whitespace-nowrap line-clamp-1 text-[24px] leading-[140%]`}
  ${tw`md:text-[36px]`}

  span.dollar,
  span.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;

/*****************************************************/
//卡片-炸炸大 繼承 SPdTitle
export const SPdTitleL = styled(SPdTitle)`
  ${tw`rounded-[0px] border-none absolute top-0 left-0 z-10 shrink-0 overflow-hidden flex flex-row items-center justify-start text-center py-0 px-5 w-[122px] h-[122px]`}
  ${tw`xl:(w-[180px] h-[180px])`}

  span {
    ${tw`z-10 text-white-100 text-clip whitespace-normal`}
    ${tw`xl:text-[22px]`}
  }

  img {
    ${tw`absolute top-[0%] right-[0%] bottom-[0%] left-[0%] z-[0] overflow-hidden h-full w-full max-w-full max-h-full`}
  }
`;

//卡片-圖片大 繼承 SPdImg
export const SPdImgL = styled(SPdImg)`
  ${tw`p-10`}
`;

//卡片-價格 繼承 SPdPrice
export const SPdPriceL = styled(SPdPrice)`
  ${tw`w-fit m-auto border-[2px] border-solid border-bk-400 rounded-full px-5 py-4`}

  span {
    ${tw`inline-flex items-center`}
  }

  b {
    ${tw`text-red-800`}
  }
`;
