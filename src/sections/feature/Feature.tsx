import { styled } from "@stitches/react";

type FeatureElementProps = {
  paragraph1: string | undefined;
  paragraph2: string | undefined;
};

const FeatureSection = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

const FeatureElementContainer = styled("div", {
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

const FeatureDetails = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const FeatureDetailsHeading = styled("h3", {
  color: "$black",
});

const FeatureParagraph = styled("p", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

const FeatureBoxWrapper = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FeatureBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const FeatureBoxTitle = styled("h3", {
  color: "$black",
});

const BoxContentWrapper = styled("ul", {
  listStyleType: "none",
  margin: "0",
  padding: "0",

  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const BoxContentItem = styled("li", {
  display: "flex",
  gap: "24px",
});

const NumItem = styled("span", {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$primary",
});

const TextItem = styled("span", {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "25px",
  color: "$black",
  mixBlendMode: "normal",
  opacity: "0.5",
});

export const Feature = (props: FeatureElementProps) => {
  return (
    <FeatureSection>
      <FeatureElementContainer>
        <FeatureDetails>
          <FeatureDetailsHeading>Features</FeatureDetailsHeading>
          <FeatureParagraph>{props.paragraph1}</FeatureParagraph>
          <FeatureParagraph>{props.paragraph2}</FeatureParagraph>
        </FeatureDetails>
        <FeatureBoxWrapper>
          <FeatureBox>
            <FeatureBoxTitle>In the Box</FeatureBoxTitle>
            <BoxContentWrapper>
              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>Headphone Unit</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>2x</NumItem>
                <TextItem>Replacement Earcups</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>User Manual</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>3.5mm 5m Audio Cable</TextItem>
              </BoxContentItem>

              <BoxContentItem>
                <NumItem>1x</NumItem>
                <TextItem>Travel Bag</TextItem>
              </BoxContentItem>
            </BoxContentWrapper>
          </FeatureBox>
        </FeatureBoxWrapper>
      </FeatureElementContainer>
    </FeatureSection>
  );
};
