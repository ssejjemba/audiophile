import { styled } from "@stitches/react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const CTAButton = styled("button", {
  border: "1px solid $black",
  outline: "none",
  padding: "15px 30px",
  background: "transparent",
  color: "$black",
  cursor: "pointer",
  marginTop: "16px",

  "&:hover": {
    opacity: "0.8",
  },
});

export const ProductButton = (props: ButtonProps) => {
  return <CTAButton>{props.text}</CTAButton>;
};
