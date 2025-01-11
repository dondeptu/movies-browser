import {
  Wrapper,
  ButtonWrapper,
  Button,
  TextWrapper,
  PageLabel,
  PageNumber,
} from "./styled.js";

const PaginationButton = ({ onClick, disabled, children, direction }) => (
  <Button disabled={disabled} onClick={onClick}>
    {direction === "left" && (
      <>
        {children === "First" ? (
          <>
            <Arrow $disabled={disabled} direction={direction} />
            <SecondArrow $disabled={disabled} direction={direction} />
          </>
        ) : (
          <Arrow $disabled={disabled} direction={direction} />
        )}
      </>
    )}
    <ButtonText $disabled={disabled}>{children}</ButtonText>
    {direction === "right" && (
      <>
        {children === "Last" ? (
          <>
            <Arrow $disabled={disabled} direction={direction} />
            <SecondArrow $disabled={disabled} direction={direction} />
          </>
        ) : (
          <Arrow $disabled={disabled} direction={direction} />
        )}
      </>
    )}
  </Button>
);

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
