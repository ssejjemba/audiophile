import { styled } from "@stitches/react";

type ReturnBtnProps = {
  text: string;
};

const ReturnBtn = styled("button", {
  outline: "none",
  border: "none",
  cursor: "pointer",
  padding: "12px 14px",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "25px",
  backgroundColor: "transparent",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
  marginTop: "79px",
});

export const ReturnButton = ({ text }: ReturnBtnProps) => {
  return <ReturnBtn>{text}</ReturnBtn>;
};