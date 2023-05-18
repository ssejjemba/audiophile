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
});

const HeroImage = styled("div", {
  width: "60%",
  height: "100%",

  clipPath: "circle(41% at 54% 52%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HeroImg = styled("img", {
  width: "980px",
  height: "660px",
  transform: "translate(-193px, -30px)",
  objectFit: "cover",
});

const Aside = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "40%",
  height: "100%",
  background: "radial-gradient(rgba(0,0,0,0.5), transparent)",
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
          <Link
            to={`${gadgetData.headphonesCategory.headphones.markIIheadphones.gadgetPageURL}`}
          >
            <FilledButton text="See Product" />
          </Link>
        </HeroContent>
      </Aside>
      <HeroImage>
        <HeroImg src="home/desktop/image-hero.jpg" alt="Hero Image" />
      </HeroImage>
    </HeroContainer>
  );
};
