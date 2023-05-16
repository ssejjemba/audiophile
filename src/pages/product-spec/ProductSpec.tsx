import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { styled } from "@stitches/react";
import { GadgetCard } from "../../components/card/GadgetCard";
import gadgetData from "../../data/gadget.json";
import { Feature } from "../../sections/feature/Feature";
import { Gallery } from "../../sections/gallery/Gallery";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

const SpecsMainContainer = styled("main", {
  width: "100%",
  height: "auto",
  padding: "0 100px",
  background: "$gray500",
});

const GadgetSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

export const MarkIIHeadphonesSpecs = () => {
  return (
    <>
      <NavWrapper>
        <NavigationBar hasBorder={false} />
      </NavWrapper>
      <SpecsMainContainer>
        <ReturnButton text="Go Back" />
        <GadgetSection>
          <GadgetCard
            GadgetName={gadgetData[0].headphones?.[0].gadgetName}
            GadgetDetails={gadgetData[0].headphones?.[0].gadgetDetails}
            Src={gadgetData[0].headphones?.[0].gadgetImageURL}
            Alt={gadgetData[0].headphones?.[0].gadgetImageAlt}
            IsNewLabel={gadgetData[0].headphones?.[0].IsNewGadgetLabel}
            IsCardEven={gadgetData[0].headphones?.[0].IsEvenCard}
            GadgetPrice={gadgetData[0].headphones?.[0].gadgetPrice}
            hasSpec
          />
        </GadgetSection>
        <Feature />
        <Gallery />
      </SpecsMainContainer>
    </>
  );
};
