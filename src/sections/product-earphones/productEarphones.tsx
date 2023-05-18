import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import Data from "../../data/data.json";

const EarphonesSection = styled("section", {
  height: "60vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ProductEarphones = () => {
  return (
    <EarphonesSection>
      <ProductExpo
        ProductName={Data.earphonesCategory.earphones.YX1Earphones.gadgetName}
        ProductThumbnail={
          Data.earphonesCategory.earphones.YX1Earphones.gadgetThumbnail
        }
        ProductURL={Data.earphonesCategory.earphones.YX1Earphones.gadgetPageURL}
        ButtonTheme="light"
        gutterX="30px"
        backColor="hsl(0, 0%, 95%)"
        flexAlign="center"
      />
    </EarphonesSection>
  );
};
