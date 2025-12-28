import tw, { styled } from 'twin.macro';

export const SWrap = styled.div`
  ${tw`relative`}
`;

export const SBgBox = styled.div`
  ${tw`pointer-events-none absolute inset-0 z-[1] overflow-hidden`}
`;

export const SMainBox = styled.div`
  ${tw`relative z-[2]`}
`;

export const SFgBox = styled.div`
  ${tw`pointer-events-none absolute inset-0 z-[3] overflow-hidden`}
`;

export const STitle = styled.div`
  ${tw`relative flex flex-col items-center justify-start px-5 py-10 space-y-2.5`}

  h2 {
    ${tw`flex h-[50px] items-center justify-center md:h-[80px] xl:h-[114px]`}

    img {
      ${tw`!h-auto !w-auto max-h-full`}
    }
  }

  h3 {
    ${tw`flex w-full items-center justify-center gap-0 sm:gap-5`}

    span {
      ${tw`shrink-0 grow-0 font-ZenMaruGothic font-bold text-[24px] leading-[140%] md:text-[32px]`}
    }

    &::before {
      content: attr(before);
      ${tw`block h-[3px] w-full bg-white-100 sm:content-[attr(before)]`}
    }

    &::after {
      content: attr(after);
      ${tw`block h-[3px] w-full bg-white-100 sm:content-[attr(after)]`}
    }
  }
`;

export const STable = styled.div`
  ${tw`relative`}

  ul {
    ${tw`relative flex flex-row flex-wrap items-start gap-y-10`}
  }

  li {
    ${tw`relative m-auto flex flex-row items-start justify-center`}
  }
`;

export const SPdItem = styled.div(({ order }) => [
  tw`relative flex flex-col gap-5 overflow-hidden`,
  order < 2 && tw`w-[353px] pt-5 xl:w-[510px]`,
  order > 1 && tw`w-[170px] pt-6 md:w-[222px] xl:w-[276px]`,
]);

export const STopBox = styled.div(({ order }) => [
  tw`w-full rounded-[50px] bg-center`,
  order < 2 && tw`py-5 pl-5 pr-20 md:py-8 md:pl-8 md:pr-20`,
  order > 1 && tw`px-2 py-2 md:py-4 md:pl-4`,
]);

export const SPdImg = styled.div(({ order }) => [
  tw`relative z-[1] overflow-hidden`,
  order < 2 &&
    tw`rounded-[20px] md:h-[253px] md:w-[253px] xl:h-[398px] xl:w-[398px]`,
  order > 1 && tw`h-full w-full rounded-[45px]`,
]);

export const SPdTitle = styled.h4(({ order }) => [
  tw`absolute right-0 top-0 z-[2] flex items-center justify-center overflow-hidden bg-contain text-center font-bold text-bk-400`,
  order < 2 &&
    tw`h-[140px] w-[140px] px-5 py-10 text-lg xl:h-[180px] xl:w-[180px] xl:text-5xl`,
  order > 1 &&
    tw`h-[90px] w-[90px] px-2 py-2 font-medium !leading-[18px] md:font-bold md:leading-[140%] xl:h-[122px] xl:w-[122px] xl:px-5 xl:py-5 xl:text-[18px]`,
]);

export const SInfoBox = styled.div(({ order }) => [
  tw`relative flex w-full flex-col justify-center gap-2 overflow-hidden px-2 text-center md:px-5`,
  order < 2 && tw`text-[24px] xl:flex-row xl:justify-between`,
  order > 1 && tw`text-[18px] md:text-[24px]`,
]);

export const SPdName = styled.h5(({ order }) => [
  tw`relative flex w-full shrink-0 items-center justify-center overflow-hidden text-center font-bold text-white-100`,
  order < 2 && tw`h-[40px] md:h-[40px] xl:h-[70px] xl:w-1/2`,
  order > 1 && tw`h-[52px] md:h-[70px] xl:h-[70px]`,
]);

export const SPdPrice = styled.h6`
  ${tw`relative overflow-hidden text-center font-bold italic font-Jost text-white-100 whitespace-nowrap`}
  ${tw`text-[24px] leading-[140%] md:text-[36px]`}

	.dollar,
	.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;

export const SPdPriceLarge = styled(SPdPrice)`
  ${tw`m-auto flex flex-row items-center justify-center gap-3 rounded-full border-[2px] border-solid border-bk-400 bg-white-100 px-5 py-2 text-red-800`}
  ${tw`xl:w-1/2`}

	img {
    ${tw`h-5 w-5 shrink-0`}
  }
`;
