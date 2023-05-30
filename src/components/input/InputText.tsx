import { styled } from "@stitches/react";

export type InputTextProps = {
  label: string;
  placeHolder: string;
};

const InputTextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "9px",
});

const Textlabel = styled("label", {
  display: "block",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "-0.2px",
  color: "$black",
});

const TextInput = styled("input", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "-0.25px",
  color: "$black",

  width: "309px",
  height: "56px",
  border: "1px solid $gray400",
  background: "$white",
  borderRadius: "8px",
  padding: "18px 24px 19px",

  "&:focus, &:focus-within, &:focus-visible": {
    outline: "none",
    border: "1px solid $primary",
  },
});

export const InputText = ({ placeHolder, label }: InputTextProps) => {
  return (
    <InputTextContainer>
      <Textlabel htmlFor="text_input_id">{label}</Textlabel>
      <TextInput type="text" id="text_input_id" placeholder={placeHolder} />
    </InputTextContainer>
  );
};
