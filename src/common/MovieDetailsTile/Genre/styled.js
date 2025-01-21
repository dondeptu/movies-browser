import styled from "styled-components";
import { Container, GenreItem } from "../../MovieTile/Genre/styled";

export const DetailsTileContainer = styled(Container)`
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const DetailsTileGenreItem = styled(GenreItem)`
    line-height: 1;
`;