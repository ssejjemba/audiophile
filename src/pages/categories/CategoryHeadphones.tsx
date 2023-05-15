import { CategoryHero } from "../../sections/category-hero/CategoryHero";
import gadgetData from "../../data/gadget.json";
import { GadgetCard } from "../../components/card/GadgetCard";
import { styled } from "@stitches/react";

const SectionGadget = styled("section", {
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
        title={gadgetData.headphones.gadgetName.slice(
          gadgetData.headphones.gadgetName.lastIndexOf(" "),
          -1
        )}
      />
      <SectionGadget>
        <GadgetCard
          GadgetName={gadgetData.headphones.gadgetName}
          GadgetDetails={gadgetData.headphones.gadgetDetails}
          Src={gadgetData.headphones.gadgetImageURL}
          Alt={gadgetData.headphones.gadgetImageAlt}
          IsNewLabel={gadgetData.headphones.IsNewGadgetLabel}
          IsCardEven={gadgetData.headphones.IsEvenCard}
        />
      </SectionGadget>
    </>
  );
};
