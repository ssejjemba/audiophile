// Company Gadget Card Component

import { styled } from "@stitches/react";
import { FilledButton } from "../buttons/FilledButton";

export type GadgetCardProps = {
  GadgetName: string;
  GadgetDetails: string;
  IsNewLabel: boolean;
  IsCardEven: boolean;
  Src: string;
  Alt: string;
};
const GadgetCardContainer = styled("div", {
  width: "100%",
  height: "560px",
  display: "flex",
});

const GadgetCardImage = styled("div", {
  width: "50%",
  height: "100%",
  borderRadius: "8px",
});

const GadgetCardImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const GadgetCardDescription = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
});

const GadgetCardDetailsBox = styled("div", {
  width: "445px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
});

const NewGadgetLabel = styled("span", {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "10px",
  textTransform: "uppercase",
  color: "$primary",
  marginBottom: "16px",
});

const GadgetCardName = styled("h1", {
  marginBottom: "32px",
});

const GadgetCardDetails = styled("p", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
  marginBottom: "40px",
});

export const GadgetCard = (props: GadgetCardProps) => {
  return (
    <GadgetCardContainer
      style={
        props.IsCardEven
          ? {
              flexDirection: "row",
            }
          : {
              flexDirection: "row-reverse",
            }
      }
    >
      <GadgetCardImage>
        <GadgetCardImg src={props.Src} alt={props.Alt} />
      </GadgetCardImage>
      <GadgetCardDescription
        style={
          props.IsCardEven
            ? { justifyContent: "flex-end" }
            : {
                justifyContent: "flex-start",
              }
        }
      >
        <GadgetCardDetailsBox>
          {props.IsCardEven ? <NewGadgetLabel>NEW PRODUCT</NewGadgetLabel> : ""}
          <GadgetCardName>{props.GadgetName}</GadgetCardName>
          <GadgetCardDetails>{props.GadgetDetails}</GadgetCardDetails>
          <FilledButton text="See Product" />
        </GadgetCardDetailsBox>
      </GadgetCardDescription>
    </GadgetCardContainer>
  );
};
