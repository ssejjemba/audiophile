import { styled } from "@stitches/react";

const CategoriesSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "165px",
  paddingRight: "165px",
  background: "$gray400",
});

const CategoriesContainer = styled("section", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  width: "100%",
  height: "284px",
  background: "OrangeRed",
});

export const Categories = () => {
  return (
    <CategoriesSection>
      <CategoriesContainer></CategoriesContainer>
    </CategoriesSection>
  );
};
