import { styled } from "@stitches/react";
import { ProductExpo } from "../../components/product-expo/ProductExpo";
import Data from "../../data/data.json";

const Zx9SpeakerSection = styled("section", {
  height: "100vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Product9Speakers = () => {
  return (
    <Zx9SpeakerSection>
      <ProductExpo
        ProductName={Data.speakersCategory.speakers.ZX9Speakers.gadgetName}
        ProductURL={Data.speakersCategory.speakers.ZX9Speakers.gadgetPageURL}
        ProductThumbnail={
          Data.speakersCategory.speakers.ZX9Speakers.gadgetThumbnail
        }
        ProductSrc={Data.speakersCategory.speakers.ZX9Speakers.productSrc}
        ProductAlt={Data.speakersCategory.speakers.ZX9Speakers.productAlt}
        ProductDetails={
          Data.speakersCategory.speakers.ZX9Speakers.productDetails
        }
        ButtonTheme="dark"
        height="500px"
        padX="50px 95px 0"
        size="auto"
        display="flex"
        objCenter="center"
        objEnd="flex-end"
        background={`hsl(22, 65%, 57%) url(${Data.speakersCategory.speakers.ZX9Speakers.background})`}
      />
    </Zx9SpeakerSection>
  );
};
