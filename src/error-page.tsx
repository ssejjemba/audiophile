import { useRouteError } from "react-router-dom";
import { styled } from "@stitches/react";

const ErrorPageContainer = styled("div", {
  width: "100%",
  height: "100vh",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ErrorText = styled("p", {
  color: "$primary",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "25px",
  marginTop: "10px",
});

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <ErrorPageContainer id="error-page">
      <h3>Oops! Sorry, an unexpected error has occurred.</h3>
      <ErrorText>{error.statusText || error.message}</ErrorText>
    </ErrorPageContainer>
  );
}
