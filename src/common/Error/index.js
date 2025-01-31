import {
  ErrorWrapper,
  ErrorIcon,
  ErrorMessage,
  ErrorDescription,
  Button,
} from "./styled";

export const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <ErrorMessage>Oops! Something went wrong...</ErrorMessage>
      <ErrorDescription>
        Please check your network connection <br /> and try again
      </ErrorDescription>
      <Button to="/">Back to home page</Button>
    </ErrorWrapper>
  );
};
