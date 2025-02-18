import styled from "styled-components";

export const Wrapper = styled.header`
  max-width: 100%;
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};  
  height: clamp(34vh, 49vw, 105vh);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {    
    margin-bottom: -8px;
    height: clamp(35vh, 49vw, 105vh);
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.mobileS}px) { 
    height: clamp(13vh, 49vw, 105vh);
    max-height: fit-content;
  }
`;
