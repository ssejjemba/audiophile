import { GadgetCard } from "../../components/card/GadgetCard";
import { CategoryHero } from "../../sections/category-hero/CategoryHero";
import { CategoryFoot } from "../../sections/category-foot/CategoryFoot";
import { styled } from "@stitches/react";
import gadgetData from "../../data/data.json";

const GadgetContainer = styled("main", {
  width: "100%",
  height: "100%",
});

const GadgetSection = styled("section", {
  width: "100%",
  height: "100vh",
  padding: "0 100px",
  display: "flex",
  alignItems: "center",
});

export const CategoryEarphones = () => {
  return (
    <>
      <CategoryHero title={gadgetData.earphonesCategory.productTitle} />
      <GadgetContainer>
        {Object.values(gadgetData.earphonesCategory.earphones).map((card) => (
          <GadgetSection>
            <GadgetCard
              GadgetName={card.gadgetName}
              GadgetDetails={card.gadgetDetails}
              Src={card.gadgetImageURL}
              Alt={card.gadgetImageAlt}
              IsNewLabel={card.IsNewGadgetLabel}
              IsCardEven={card.IsEvenCard}
              hasSpec={false}
            />
          </GadgetSection>
        ))}
        <CategoryFoot />
      </GadgetContainer>
    </>
  );
};

export const CategoryHeadphones = () => {
  return (
    <>
      <CategoryHero title={gadgetData.headphonesCategory.productTitle} />
      <GadgetContainer>
        {Object.values(gadgetData.headphonesCategory.headphones).map((card) => (
          <GadgetSection>
            <GadgetCard
              GadgetName={card.gadgetName}
              GadgetDetails={card.gadgetDetails}
              Src={card.gadgetImageURL}
              Alt={card.gadgetImageAlt}
              IsNewLabel={card.IsNewGadgetLabel}
              IsCardEven={card.IsEvenCard}
              hasSpec={false}
            />
          </GadgetSection>
        ))}
        <CategoryFoot />
      </GadgetContainer>
    </>
  );
};

export const CategorySpeakers = () => {
  return (
    <>
      <CategoryHero title={gadgetData.speakersCategory.productTitle} />

      <GadgetContainer>
        {Object.values(gadgetData.speakersCategory.speakers).map((card) => (
          <GadgetSection>
            <GadgetCard
              GadgetName={card.gadgetName}
              GadgetDetails={card.gadgetDetails}
              Src={card.gadgetImageURL}
              Alt={card.gadgetImageAlt}
              IsNewLabel={card.IsNewGadgetLabel}
              IsCardEven={card.IsEvenCard}
              hasSpec={false}
            />
          </GadgetSection>
        ))}
        <CategoryFoot />
      </GadgetContainer>
    </>
  );
};
