import { styled } from "@stitches/react";
import { NavigationBar } from "../navigation/NavigationBar";

export type CategoryHeroProps = {
  title: string;
};

const CategoryHeroSection = styled("header", {
  width: "100%",
  height: "50vh",
  padding: "0 100px",
  background: "$secondary",
});

const HeroHeadingContainer = styled("div", {
  width: "100%",
  height: "auto",
  marginTop: "100px",
  display: "flex",
  justifyContent: "center",
});

const HeroHeading = styled("h2", {
  color: "$white",
});

export const CategoryHero = ({ title }: CategoryHeroProps) => {
  return (
    <CategoryHeroSection>
      <NavigationBar hasBorder={false} hasNotification />
      <HeroHeadingContainer>
        <HeroHeading>{title}</HeroHeading>
      </HeroHeadingContainer>
    </CategoryHeroSection>
  );
};
