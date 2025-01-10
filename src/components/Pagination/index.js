import {
  Wrapper,
  ButtonWrapper,
  Button,
  TextWrapper,
  PageLabel,
  PageNumber,
} from "./styled.js";

export const Pagination = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button>First</Button>
        <Button>Previous</Button>
      </ButtonWrapper>
      <TextWrapper>
        <PageLabel>Page</PageLabel>
        <PageNumber>1</PageNumber>
        <PageLabel>of</PageLabel>
        <PageNumber>500</PageNumber>
      </TextWrapper>
      <ButtonWrapper>
        <Button>Next</Button>
        <Button>Last</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
