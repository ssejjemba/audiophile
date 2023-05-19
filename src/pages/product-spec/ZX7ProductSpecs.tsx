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

export const ZX7SpeakerSpecs = () => {
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
              gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetName
            }
            GadgetDetails={
              gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetDetails
            }
            Src={
              gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetImageURL
            }
            Alt={
              gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetImageAlt
            }
            IsNewLabel={
              gadgetData.speakersCategory.speakers.ZX7Speakers.IsNewGadgetLabel
            }
            IsCardEven={
              gadgetData.speakersCategory.speakers.ZX7Speakers.IsEvenCard
            }
            GadgetPrice={
              gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetPrice
            }
            id={gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetId}
            hasSpec
          />
        </GadgetSection>
        <Feature
          paragraph1={
            gadgetData.speakersCategory.speakers.ZX7Speakers["feature-para-1"]
          }
          paragraph2={
            gadgetData.speakersCategory.speakers.ZX7Speakers["feature-para-2"]
          }
        />
        <Gallery
          sideTopURL={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .sideTopImg.ImageUrl
          }
          sideTopAlt={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .sideTopImg.ImageAlt
          }
          sideBottomURL={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .sideBottomImg.ImageUrl
          }
          sideBottomAlt={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .sideBottomImg.ImageUrl
          }
          mainStreamURL={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .mainImg.ImageUrl
          }
          mainStreamAlt={
            gadgetData.speakersCategory.speakers.ZX7Speakers.gadgetGallery
              .mainImg.ImageUrl
          }
        />
        <RelatedProductsSection>
          <RelatedProductHeading>you may also like</RelatedProductHeading>
          <RelatedProductsCardContainer>
            {Object.values(
              gadgetData.speakersCategory.speakers.ZX7Speakers
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
