import styled from "styled-components";

export const TileDescription = styled.p`
  margin: 24px 0px 0px;
  border: none; 
  resize: none;  
  font-size: clamp(14px, 2vw, 20px);
  line-height: 1.6;
  max-height: 130px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpointDescription.mobileMax}px) {
     display: grid;
     grid-column: 1 / span 2;     
     font-size: clamp(14px, 3vw, 16px);
     margin-top: 16px;
     padding: 0px;    
 }

  &::-webkit-scrollbar {
    width: 4px;    
  }

  &::-webkit-scrollbar-thumb {   
    background-color:  ${({ theme }) => theme.color.grey};
    border-radius: 10px;    
  }

  &::-webkit-scrollbar-thumb:hover {    
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:active {    
    background-color:  ${({ theme }) => theme.color.darkergrey};
  }

  &:focus {
    outline: none; 
  }
`;