import { styled } from "@stitches/react";

const GallerySection = styled("section", {
  width: "100%",
  height: "100%",
  paddingBottom: "50px",
});

const GalleryElementContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "32px",
});

const GallerySideTopBox = styled("div", {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const GallerySideBottomBox = styled("div", {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const GallerySideMainBox = styled("div", {
  width: "100%",
  height: "auto",
  gridColumn: "2 / 3",
  gridRow: "-1 / span 2",
  borderRadius: "8px",
});

const GalleryImg = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "8px",
});

export const Gallery = () => {
  return (
    <GallerySection>
      <GalleryElementContainer>
        <GallerySideTopBox>
          <GalleryImg src="/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" />
        </GallerySideTopBox>
        <GallerySideBottomBox>
          <GalleryImg
            src="/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
            alt="beast gear"
          />
        </GallerySideBottomBox>
        <GallerySideMainBox>
          <GalleryImg
            src="/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
            alt="beast gear"
          />
        </GallerySideMainBox>
      </GalleryElementContainer>
    </GallerySection>
  );
};
