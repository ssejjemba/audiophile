import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { styled } from "@stitches/react";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

export const MarkIIHeadphonesSpecs = () => {
  return (
    <>
      <NavWrapper>
        <NavigationBar />
      </NavWrapper>
    </>
  );
};
