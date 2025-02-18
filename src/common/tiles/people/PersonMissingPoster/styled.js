import styled from "styled-components";
import { ReactComponent as missingPerson } from "../../../../images/MissingPerson.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2/3;
  background-color: ${({ theme }) => theme.color.postergrey};
`;

export const PersonMissingStyled = styled(missingPerson)`
  width: 72px;
  height: auto;

  path {
    stroke-width: 1.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 48px;
  }
`;
