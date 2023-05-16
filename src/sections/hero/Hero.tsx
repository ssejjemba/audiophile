import { styled } from "@stitches/react";
import { FilledButton } from "../../components/buttons/FilledButton";
import { Link } from "react-router-dom";
import gadgetData from "../../data/data.json";

const HeroContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "calc(100% - 96px)",
  backgroundImage: "url(home/desktop/image-hero.jpg)",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
});

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "50%",
  height: "100%",
});

const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "398px",
  height: "100%",
});

const Brief = styled("p", {
  color: "$white",
  opacity: 0.5,
  marginBottom: "24px",
});

const Heading = styled("h1", {
  marginBottom: "24px",
  color: "$white",
});

const Description = styled("p", {
  marginBottom: "40px",
  color: "$white",
  mixBlendMode: "normal",
  opacity: 0.75,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "25px",
});

export const Hero = () => {
  return (
    <HeroContainer>
      <Aside>
        <HeroContent>
          <Brief className="overline">New product</Brief>
          <Heading>XX99 Mark II Headphones</Heading>
          <Description>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Description>
          <Link to={`${gadgetData[0].headphones?.[0].gadgetPageURL}`}>
            <FilledButton text="See Product" />
          </Link>
        </HeroContent>
      </Aside>
    </HeroContainer>
  );
};
