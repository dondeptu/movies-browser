import styled from "styled-components";

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
