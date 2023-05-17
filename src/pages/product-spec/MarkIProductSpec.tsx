import { NavigationBar } from "../../sections/navigation/NavigationBar";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { styled } from "@stitches/react";
import { GadgetCard } from "../../components/card/GadgetCard";
import { OtherProductCard } from "../../components/card/OtherProductsCard";
import gadgetData from "../../data/data.json";
import { Feature } from "../../sections/feature/Feature";
import { Gallery } from "../../sections/gallery/Gallery";
import { CategoryFoot } from "../../sections/category-foot/CategoryFoot";

const NavWrapper = styled("header", {
  background: "$secondary",
  width: "100%",
  height: "fit-content",
  padding: "0 100px",
});

const SpecsMainContainer = styled("main", {
  width: "100%",
  height: "auto",
  background: "$gray500",
});

const GadgetSection = styled("section", {
  width: "100%",
  height: "100vh",
  padding: "0 100px",
  display: "flex",
  alignItems: "center",
});

const RelatedProductsSection = styled("section", {
  width: "100%",
  height: "100vh",
  padding: "0 100px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "64px",
});

const RelatedProductHeading = styled("h3", {
  color: "$black",
});

const RelatedProductsCardContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
});

export const MarkIHeadphoneSpecs = () => {
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
              gadgetData.headphonesCategory.headphones.markIheadphones
                .gadgetName
            }
            GadgetDetails={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .gadgetDetails
            }
            Src={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .gadgetImageURL
            }
            Alt={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .gadgetImageAlt
            }
            IsNewLabel={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .IsNewGadgetLabel
            }
            IsCardEven={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .IsEvenCard
            }
            GadgetPrice={
              gadgetData.headphonesCategory.headphones.markIheadphones
                .gadgetPrice
            }
            hasSpec
          />
        </GadgetSection>
        <Feature
          paragraph1={
            gadgetData.headphonesCategory.headphones.markIheadphones[
              "feature-para-1"
            ]
          }
          paragraph2={
            gadgetData.headphonesCategory.headphones.markIheadphones[
              "feature-para-2"
            ]
          }
        />
        <Gallery
          sideTopURL={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.sideTopImg.ImageUrl
          }
          sideTopAlt={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.sideTopImg.ImageAlt
          }
          sideBottomURL={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.sideBottomImg.ImageUrl
          }
          sideBottomAlt={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.sideBottomImg.ImageUrl
          }
          mainStreamURL={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.mainImg.ImageUrl
          }
          mainStreamAlt={
            gadgetData.headphonesCategory.headphones.markIheadphones
              .gadgetGallery.mainImg.ImageUrl
          }
        />
        <RelatedProductsSection>
          <RelatedProductHeading>you may also like</RelatedProductHeading>
          <RelatedProductsCardContainer>
            {Object.values(
              gadgetData.headphonesCategory.headphones.markIheadphones
                .otherRelatedProduct
            ).map((cardData) => (
              <OtherProductCard
                productName={cardData.productName}
                productImgURL={cardData.productImgURL}
                productImgAlt={cardData.productImgAlt}
                productPageURL={cardData.productPageURL}
                key={cardData.productName}
              />
            ))}
          </RelatedProductsCardContainer>
        </RelatedProductsSection>
        <CategoryFoot />
      </SpecsMainContainer>
    </>
  );
};
