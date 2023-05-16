import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { styled } from "@stitches/react";
import { GadgetCard } from "../../components/card/GadgetCard";
import gadgetData from "../../data/data.json";
import { Feature } from "../../sections/feature/Feature";
import { Gallery } from "../../sections/gallery/Gallery";
import { RelatedProducts } from "../../sections/related-products/RelatedProducts";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

const SpecsMainContainer = styled("main", {
  width: "100%",
  height: "auto",
  padding: "0 100px",
  background: "$gray500",
});

const GadgetSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

export const MarkIIHeadphonesSpecs = () => {
  return (
    <>
      <NavWrapper>
        <NavigationBar hasBorder={false} />
      </NavWrapper>
      <SpecsMainContainer>
        <ReturnButton text="Go Back" />
        <GadgetSection>
          <GadgetCard
            GadgetName={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .gadgetName
            }
            GadgetDetails={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .gadgetDetails
            }
            Src={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .gadgetImageURL
            }
            Alt={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .gadgetImageAlt
            }
            IsNewLabel={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .IsNewGadgetLabel
            }
            IsCardEven={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .IsEvenCard
            }
            GadgetPrice={
              gadgetData.headphonesCategory.headphones?.markIIheadphones
                .gadgetPrice
            }
            hasSpec
          />
        </GadgetSection>
        <Feature
          paragraph1={
            gadgetData.headphonesCategory.headphones?.markIIheadphones[
              "feature-para-1"
            ]
          }
          paragraph2={
            gadgetData.headphonesCategory.headphones?.markIIheadphones[
              "feature-para-2"
            ]
          }
        />
        <Gallery
          sideTopURL={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.sideTopImg.ImageUrl
          }
          sideTopAlt={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.sideTopImg.ImageAlt
          }
          sideBottomURL={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.sideBottomImg.ImageUrl
          }
          sideBottomAlt={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.sideBottomImg.ImageUrl
          }
          mainStreamURL={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.mainImg.ImageUrl
          }
          mainStreamAlt={
            gadgetData.headphonesCategory.headphones?.markIIheadphones
              .gadgetGallery.mainImg.ImageUrl
          }
        />
        <RelatedProducts />
      </SpecsMainContainer>
    </>
  );
};
