import styled from "styled-components";
import { ReactComponent as Error } from "../../images/iconError.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ErrorWrapper = styled.div`
  margin: 180px 16px auto 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ErrorIcon = styled(Error)`
  width: 120px;
  height: 120px;
`;

export const ErrorMessage = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const ErrorDescription = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
`;

export const Button = styled(Link)`
  padding: 16px 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  font-family: Open-Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;
  
   &:hover{        
        transform: scale(1.03);
    }
`;
