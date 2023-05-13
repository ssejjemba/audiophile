import { styled } from "@stitches/react";

export type ButtonProps = {
  text: string;
  theme: string;
  onClick?: () => void;
};

const CTAButton = styled("button", {
  outline: "none",
  padding: "15px 30px",
  cursor: "pointer",
  marginTop: "16px",

  "&:hover": {
    opacity: "0.8",
  },
});

export const ProductButton = (props: ButtonProps) => {
  return (
    <CTAButton
      style={
        props.theme == "light"
          ? {
              background: "transparent",
              color: "hsl(0, 0%, 0%)",
              border: "1px solid hsl(0, 0%, 0%)",
            }
          : {
              background: "hsl(0, 0%, 0%)",
              color: "hsl(0, 0%, 100%)",
              border: "none",
            }
      }
    >
      {props.text}
    </CTAButton>
  );
};
