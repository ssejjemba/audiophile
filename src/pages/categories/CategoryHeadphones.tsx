import { CategoryHero } from "../../sections/category-hero/CategoryHero";
import productData from "../../data/product.json";

export const CategoryHeadphones = () => {
  return (
    <>
      <CategoryHero
        title={productData[0].productName.slice(
          productData[0].productName.indexOf(" "),
          -1
        )}
      />
    </>
  );
};
