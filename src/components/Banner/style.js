import tw, { styled } from 'twin.macro';

// 最外層容器
export const Wrap = styled.div`
  ${tw`relative w-full overflow-hidden`}
  ${tw`h-[680px] md:h-[750px] xl:h-[860px]`}
`;

// 背景容器 / 主要容器 / 前景容器
export const BgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[1] overflow-hidden pointer-events-none`}
`;

export const MainBox = styled.div`
  ${tw`relative z-[2]`}
`;

export const FgBox = styled.div`
  ${tw`absolute top-0 left-0 bottom-0 right-0 z-[3] overflow-hidden pointer-events-none`}
`;
