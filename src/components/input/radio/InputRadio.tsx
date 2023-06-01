import { styled } from "@stitches/react";

type InputRadioProps = {
  id: string;
  label: string;
};

const FormRadioContainer = styled("div", {
  display: "inline-block",
  width: "309px",
  height: "56px",
  border: "1px solid $primary",
  background: "$white",
  borderRadius: "8px",
  padding: "18px 24px 19px",
});

const RadioInput = styled("input", {
  display: "none",
});

const RadioLabel = styled("label", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "-0.2px",
  color: "$black",
  cursor: "pointer",
  position: "relative",
  paddingLeft: "44px",
});

const RadioButton = styled("span", {
  height: "24px",
  width: "24px",
  border: "1px solid $gray400",
  borderRadius: "50%",
  display: "inline-block",
  position: "absolute",
  left: "0",
  top: "-5px",

  "&::after": {
    content: `""`,
    display: "block",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "$primary",
    opacity: "0",
    transition: "opacity .2s",
  },
});

export const InputRadio = ({ label, id }: InputRadioProps) => {
  return (
    <FormRadioContainer className="form__radio-group">
      <RadioInput
        type="radio"
        className="form__radio-input"
        id={id}
        name="donate"
      />
      <RadioLabel htmlFor={id} className="form__radio-label">
        <RadioButton className="form__radio-button"></RadioButton>
        {label}
      </RadioLabel>
    </FormRadioContainer>
  );
};
