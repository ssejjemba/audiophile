import { styled } from "@stitches/react";

export type FormFieldProps = {
  text: string;
  children: React.ReactNode;
};

const FormFieldSet = styled("fieldset", {
  margin: "0",
  padding: "0",
  border: "none",
});

const FormFieldCaption = styled("legend", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "25px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "$primary",
});

export const FormField = ({ text, children }: FormFieldProps) => {
  return (
    <FormFieldSet>
      <FormFieldCaption>{text}</FormFieldCaption>
      {children}
    </FormFieldSet>
  );
};
