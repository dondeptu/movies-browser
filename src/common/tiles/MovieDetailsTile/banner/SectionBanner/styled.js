import styled from "styled-components";

// export const Wrapper = styled.header`
//   height:769px;  
//   max-width: 100%;
//   margin-bottom: 8px;  
//   overflow: hidden; 

//   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
//     padding-bottom: 0;
//     margin-bottom: -8px;
//     height: 148px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpointBanner.laptopMax}px) {
//     /* height: auto; */
//     height: 730px;
//     /* height: clamp(148px, 20vw, 730px); */
//     /* overflow: hidden; */
//   }
// `;



export const Wrapper = styled.header`
  max-width: 100%;
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  /* padding-bottom: 26.25%; */
  /* height: clamp(148px, 20vw, 769px); */
  height: clamp(34vh, 49vw, 105vh);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    /* padding-bottom: 37.5%; */
    margin-bottom: -8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointBanner.laptopMax}px) {
    /* padding-bottom: 50%; */
  }
`;
