import styled from "styled-components";

export const TileDescription = styled.p`
  margin: 24px 0px 0px;
  border: none;
  resize: none;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) =>
      theme.breakpointDescription.laptopMax}px) {
    display: grid;
    grid-column: 1 / span 2;
    font-size: clamp(14px, 3vw, 18px);
    margin-top: 16px;
    padding: 0px;
  }

  &:focus {
    outline: none;
  }
`;
