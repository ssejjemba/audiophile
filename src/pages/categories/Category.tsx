import { GadgetCard } from "../../components/card/GadgetCard";
import { CategoryHero } from "../../sections/category-hero/CategoryHero";
import { CategoryFoot } from "../../sections/category-foot/CategoryFoot";
import { styled } from "@stitches/react";
import Data from "../../data/data.json";

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
      <CategoryHero title={Data.earphonesCategory.productTitle} />
      <GadgetContainer>
        {Object.values(Data.earphonesCategory.earphones).map((card) => (
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
      <CategoryHero title={Data.headphonesCategory.productTitle} />
      <GadgetContainer>
        {Object.values(Data.headphonesCategory.headphones).map((card) => (
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
      <CategoryHero title={Data.speakersCategory.productTitle} />

      <GadgetContainer>
        {Object.values(Data.speakersCategory.speakers).map((card) => (
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
