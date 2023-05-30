import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";

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
  marginLeft: "100px",

  "&:hover": {
    color: "$primary",
  },
});

export const ReturnButton = ({ text }: ReturnBtnProps) => {
  const navigate = useNavigate();
  return <ReturnBtn onClick={() => navigate(-1)}>{text}</ReturnBtn>;
};
