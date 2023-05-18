import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import Data from "../../data/data.json";

const Speaker7Section = styled("section", {
  height: "50vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Product7Speakers = () => {
  return (
    <Speaker7Section>
      <ProductExpo
        ProductName={Data.speakersCategory.speakers.ZX7Speakers.gadgetName}
        background={`url(${Data.speakersCategory.speakers.ZX7Speakers.gadgetThumbnail})`}
        ProductURL={Data.speakersCategory.speakers.ZX7Speakers.gadgetPageURL}
        ButtonTheme="light"
        padX="0 95px 0"
        flexAlign="flex-start"
        flexDir="row-reverse"
      />
    </Speaker7Section>
  );
};
