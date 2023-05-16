import { styled } from "@stitches/react";

type CartButtonProps = {
  text: string;
};

const CartButtonElement = styled("button", {
  border: "none",
  outline: "none",
  background: "$primary",
  color: "$white",
  cursor: "pointer",
  padding: "15px 30px",

  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "18px",
  textAlign: "center",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

export const CartButton = ({ text }: CartButtonProps) => {
  return <CartButtonElement>{text}</CartButtonElement>;
};
