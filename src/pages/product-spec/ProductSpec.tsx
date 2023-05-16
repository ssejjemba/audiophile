import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { styled } from "@stitches/react";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

const SpecsMainContainer = styled("main", {
  width: "100%",
  height: "100vh",
  padding: "0 100px",
  background: "$gray500",
});

export const MarkIIHeadphonesSpecs = () => {
  return (
    <>
      <NavWrapper>
        <NavigationBar hasBorder={false} />
      </NavWrapper>
      <SpecsMainContainer>
        <ReturnButton text="Go Back" />
      </SpecsMainContainer>
    </>
  );
};
