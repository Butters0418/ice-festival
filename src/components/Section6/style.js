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
