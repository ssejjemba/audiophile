import { styled } from "@stitches/react";

export type StateButtonProps = {
  text: string;
  onClick?: () => void;
};

const StateButtonContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "$gray400",
});

const StateButtonElement = styled("button", {
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: "15px 30px",
});

const StateButtonSpan = styled("span", {
  fontSize: "13px",
  textAlign: "center",
  color: "$black",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "18px",
  letterSpacing: "1px",
  textTransform: "uppercase",
});

export const StateButton = ({ text }: StateButtonProps) => {
  return (
    <StateButtonContainer>
      <StateButtonElement>
        <svg
          width="5"
          height="2"
          viewBox="0 0 5 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            d="M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z"
            fill="black"
          />
        </svg>
      </StateButtonElement>
      <StateButtonSpan>{text}</StateButtonSpan>
      <StateButtonElement>
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            d="M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z"
            fill="black"
          />
        </svg>
      </StateButtonElement>
    </StateButtonContainer>
  );
};
