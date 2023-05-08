import { styled } from "@stitches/react";
import { Card } from "../../components/card/Card";

const CategoriesSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "165px",
  paddingRight: "165px",
  background: "$gray500",
});

const CategoriesContainer = styled("section", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  width: "100%",
  height: "284px",
});

export const Categories = () => {
  return (
    <CategoriesSection>
      <CategoriesContainer>
        <Card
          title="Headphones"
          src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          alt="Headphones"
        />
      </CategoriesContainer>
    </CategoriesSection>
  );
};
