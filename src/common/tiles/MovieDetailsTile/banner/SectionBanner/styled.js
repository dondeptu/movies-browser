import styled from "styled-components";

export const Wrapper = styled.header`
  height:769px;
  max-width: 100%;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 0;
    margin-bottom: -8px;
    height: 148px;
  }
`;
