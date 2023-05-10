import { styled } from "@stitches/react";

const BlogSection = styled("section", {
  height: "100vh",
  width: "100%",
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const BlogContainer = styled("div", {
  height: "588px",
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
});

const BlogImageContainer = styled("div", {
  width: "50%",
  height: "100%",
  backgroundImage: "url(/local/desktop/blog-bg.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "8px",
});

const BlogDetailsContainer = styled("div", {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "34px",
});

const BlogTitle = styled("h1", {
  color: "black",
});

const BlogSpan = styled("span", {
  color: "$primary",
});

const BlogDetails = styled("p", {
  color: "$black",
  mixBlendMode: "normal",
  opacity: 0.75,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "25px",
});

export const Blog = () => {
  return (
    <BlogSection>
      <BlogContainer>
        <BlogImageContainer></BlogImageContainer>
        <BlogDetailsContainer>
          <BlogTitle>
            Bringing you the <BlogSpan>best</BlogSpan> audio gear
          </BlogTitle>
          <BlogDetails>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </BlogDetails>
        </BlogDetailsContainer>
      </BlogContainer>
    </BlogSection>
  );
};
