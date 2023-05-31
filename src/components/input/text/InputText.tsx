import { styled } from "@stitches/react";
import { useRef, useState } from "react";

export type InputTextProps = {
  children?: React.ReactNode;
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  validationFn?: (text: string) => string;
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

const TextInputWrapper = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "20px",
});

const ErrorMessage = styled("span", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "-0.2",
  color: "#CD2C2C",
});

const TextInput = styled("input", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "-0.25px",
  backgroundColor: "$white",
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

export const InputText = (props: InputTextProps) => {
  const [error, setError] = useState("");
  const innerRef = useRef<null | HTMLInputElement>(null);

  const doValidation = () => {
    const currentInputText = innerRef.current?.value;
    if (currentInputText !== undefined && props.validationFn) {
      const result = props.validationFn(currentInputText);
      setError(result);
    }
  };
  return (
    <InputTextContainer>
      <TextInputWrapper>
        <Textlabel
          style={error ? { color: "#CD2C2C" } : { color: "" }}
          htmlFor={props.id}
        >
          {props.label}
        </Textlabel>
        <ErrorMessage>{error}</ErrorMessage>
      </TextInputWrapper>
      <TextInput
        type={props.type}
        id={props.id}
        ref={innerRef}
        placeholder={props.placeholder}
        onFocus={doValidation}
        onChange={doValidation}
        required
      />
    </InputTextContainer>
  );
};
