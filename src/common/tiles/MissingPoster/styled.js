import styled from "styled-components";
import { ReactComponent as iconCamera } from "../../../images/iconCamera.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.postergrey};
`;

export const StyledIconCamera = styled(iconCamera)`
  width: 72px;
  height: auto;
  opacity: 50%;

  path {
    stroke-width: 1.69px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 48px;
  }
`;