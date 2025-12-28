import tw, { styled } from 'twin.macro';

export const SWrap = styled.div`
  ${tw`relative`}
`;

export const SBgBox = styled.div`
  ${tw`pointer-events-none absolute inset-0 z-[1] overflow-hidden`}
`;

export const SBgInner = styled.div`
  ${tw`relative h-full w-full`}
`;

export const SBgImgRight = styled.img`
  ${tw`absolute right-0 top-1/2 z-[1] h-[640px] w-[1920px] shrink-0 -translate-y-1/2 object-cover`}
`;

export const SBgImgLeft = styled.img`
  ${tw`absolute left-0 top-1/2 z-[2] h-[640px] w-[1920px] shrink-0 -translate-y-1/2 object-cover`}
`;

export const SBgImgCenter = styled.img`
  ${tw`absolute left-1/2 top-1/2 z-[3] h-[640px] w-[1920px] shrink-0 -translate-x-1/2 -translate-y-1/2 object-cover`}
`;

export const SMainBox = styled.div`
  ${tw`relative z-[2]`}
`;

export const SContent = styled.div`
  ${tw`px-5 py-0 md:px-20 md:py-10 xl:px-40 xl:py-10 2xl:px-40 2xl:py-20`}
`;

export const SSwiperWrap = styled.div`
  ${tw`overflow-hidden py-10`}
`;

export const SSlideLink = styled.a`
  ${tw`relative block h-[156px] w-[140px] shrink-0 overflow-hidden`}
`;

export const SSlideImg = styled.img`
  ${tw`absolute inset-0 h-full max-h-full w-full max-w-full overflow-hidden object-cover`}
`;

export const SFgBox = styled.div`
  ${tw`pointer-events-none absolute inset-0 z-[3] overflow-hidden`}
`;
