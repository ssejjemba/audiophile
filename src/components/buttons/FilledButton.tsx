import { styled } from "@stitches/react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = styled("button", {
  height: "48px",
  width: "fit-content",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "18px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  outline: "none",
  border: "none",
  padding: "0px 30px",
  cursor: "pointer",

  color: "$white",
  background: "$primary",
  transition: "all .15s ease",

  "&:hover": {
    background: "$light",
  },

  "&:hover, &:focus": {
    outline: "none",
    border: "none",
  },
});

export const FilledButton = ({ text }: ButtonProps) => {
  return <Button>{text}</Button>;
};
