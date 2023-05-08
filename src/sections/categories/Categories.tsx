import { styled } from "@stitches/react";

const CategoriesContainer = styled("section", {
  width: "100%",
  height: "100vh",
  paddingLeft: "165px",
  paddingRight: "165px",
  background: "$gray400",
});

export const Categories = () => {
  return <CategoriesContainer></CategoriesContainer>;
};
