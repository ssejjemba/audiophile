import { styled } from "@stitches/react";
import { Card } from "../../components/card/Card";
import categorydata from "../../data/categories.json";

const CategoriesSection = styled("section", {
  width: "100%",
  height: "100vh",
  padding: "270px 100px 0",
  background: "$gray500",
});

const CategoriesContainer = styled("section", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  width: "100%",
  height: "auto",
});

export const Categories = () => {
  return (
    <CategoriesSection>
      <CategoriesContainer>
        {categorydata.categories.map((category) => (
          <Card
            title={category.title}
            src={category.src}
            alt={category.alt}
            key={category.id}
          />
        ))}
      </CategoriesContainer>
    </CategoriesSection>
  );
};
