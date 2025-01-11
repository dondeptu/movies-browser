import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../images/iconArrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  position: fixed;
  bottom: 103px;
  width: 100%;
  margin: 0;
  padding: 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const Button = styled.button`
  padding: 8px 16px;
  background-color: #d6e4ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: #e4e6f0;
    color: ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const Arrow = styled(ArrowIcon)`
  width: 7px;
  height: 11px;
  color: ${({ $disabled }) => ($disabled ? "#7E839A" : "#0044CC")};
  transform: ${({ direction }) =>
    direction === "right" ? "rotate(180deg)" : "rotate(0deg)"};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const SecondArrow = styled(ArrowIcon)`
  width: 5px;
  height: 8px;
  color: ${({ $disabled }) => ($disabled ? "#7E839A" : "#0044CC")};
  transform: ${({ direction }) =>
    direction === "right" ? "rotate(180deg)" : "rotate(0deg)"};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const PageLabel = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: #7e839a;
`;
export const PageNumber = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #18181b;
`;
