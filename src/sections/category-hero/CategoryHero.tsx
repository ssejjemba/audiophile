import { styled } from "@stitches/react";
import { NavigationBar } from "../navigation/NavigationBar";

const CategoryHeroSection = styled("section", {
  width: "100%",
  height: "50vh",
  background: "$secondary",
});

export const CategoryHero = () => {
  return (
    <CategoryHeroSection>
      <NavigationBar />
    </CategoryHeroSection>
  );
};
