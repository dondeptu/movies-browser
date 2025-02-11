import styled from "styled-components";

export const Wrapper = styled.header`
  max-height:760px;
  max-width: 100%;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 0;
    margin-bottom: -8px;
  }
`;
