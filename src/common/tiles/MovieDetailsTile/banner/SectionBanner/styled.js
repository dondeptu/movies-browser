import styled from "styled-components";

export const Wrapper = styled.header`
  padding-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-bottom: 0;
  }
`;
