import { styled } from "@stitches/react";
import { NavigationBar } from "../../sections/navigation/NavigationBar";

const HomeSection = styled("section", {
  background: "$secondary",
  width: "100%",
  height: "100vh",
  paddingLeft: "165px",
  paddingRight: "165px",
});

export default function Home() {
  return (
    <HomeSection>
      <NavigationBar />
    </HomeSection>
  );
}
