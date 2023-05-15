import { GadgetCard } from "../../components/card/GadgetCard";
import { CategoryHero } from "../../sections/category-hero/CategoryHero";
import { CategoryFoot } from "../../sections/category-foot/CategoryFoot";
import { styled } from "@stitches/react";
import gadgetData from "../../data/gadget.json";

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

export const CategoryHeadphones = () => {
  return (
    <>
      <CategoryHero
        title={gadgetData.headphones[0].gadgetName.slice(
          gadgetData.headphones[0].gadgetName.lastIndexOf(" "),
          -1
        )}
      />
      <GadgetContainer>
        {gadgetData.headphones.map((card) => (
          <GadgetSection>
            <GadgetCard
              GadgetName={card.gadgetName}
              GadgetDetails={card.gadgetDetails}
              Src={card.gadgetImageURL}
              Alt={card.gadgetImageAlt}
              IsNewLabel={card.IsNewGadgetLabel}
              IsCardEven={card.IsEvenCard}
            />
          </GadgetSection>
        ))}
        <CategoryFoot />
      </GadgetContainer>
    </>
  );
};
