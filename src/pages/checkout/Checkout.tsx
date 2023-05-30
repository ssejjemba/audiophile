import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

export const Checkout = () => {
  return (
    <NavWrapper>
      <NavigationBar hasBorder={false} />;
    </NavWrapper>
  );
};
