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

export const YX1EarphoneSpecs = () => {
  return (
    <>
      <NavWrapper>
        <NavigationBar hasBorder={false} hasNotification />
      </NavWrapper>
      <SpecsMainContainer>
        <ReturnButton text="Go Back" />
        <GadgetSection>
          <GadgetCard
            GadgetName={
              gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetName
            }
            GadgetDetails={
              gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetDetails
            }
            Src={
              gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetImageURL
            }
            Alt={
              gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetImageAlt
            }
            IsNewLabel={
              gadgetData.earphonesCategory.earphones.YX1Earphones
                .IsNewGadgetLabel
            }
            IsCardEven={
              gadgetData.earphonesCategory.earphones.YX1Earphones.IsEvenCard
            }
            GadgetPrice={
              gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetPrice
            }
            id={gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetId}
            hasSpec
          />
        </GadgetSection>
        <Feature
          paragraph1={
            gadgetData.earphonesCategory.earphones.YX1Earphones[
              "feature-para-1"
            ]
          }
          paragraph2={
            gadgetData.earphonesCategory.earphones.YX1Earphones[
              "feature-para-2"
            ]
          }
        />
        <Gallery
          sideTopURL={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .sideTopImg.ImageUrl
          }
          sideTopAlt={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .sideTopImg.ImageAlt
          }
          sideBottomURL={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .sideBottomImg.ImageUrl
          }
          sideBottomAlt={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .sideBottomImg.ImageUrl
          }
          mainStreamURL={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .mainImg.ImageUrl
          }
          mainStreamAlt={
            gadgetData.earphonesCategory.earphones.YX1Earphones.gadgetGallery
              .mainImg.ImageUrl
          }
        />
        <RelatedProductsSection>
          <RelatedProductHeading>you may also like</RelatedProductHeading>
          <RelatedProductsCardContainer>
            {Object.values(
              gadgetData.earphonesCategory.earphones.YX1Earphones
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
