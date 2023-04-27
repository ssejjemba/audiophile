import { DesignSystem } from "./pages/design_system/DesignSystem";
import { globalCss } from "../stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    textDecoration: "none",
    boxSizing: "inherit",
  },
  body: {
    boxSizing: "border-box",
    background: "$white",
    fontFamily: "$monorope",
    fontWeight: "500",
    fontSize: "$normal",
    lineHeight: "$normal",
  },
  h1: {
    fontWeight: "bold",
    fontSize: "$h1",
    textTransform: "uppercase",
    lineHeight: "$h1",
    letterSpacing: "$h1",
  },
  h2: {
    fontWeight: "bold",
    fontSize: "$h2",
    textTransform: "uppercase",
    lineHeight: "$h2",
    letterSpacing: "$h2",
  },
  h3: {
    fontWeight: "bold",
    fontSize: "$h3",
    textTransform: "uppercase",
    lineHeight: "$h3",
    letterSpacing: "$h3",
  },
  h4: {
    fontWeight: "bold",
    fontSize: "$h4",
    textTransform: "uppercase",
    lineHeight: "$h4",
    letterSpacing: "$h4",
  },
  h5: {
    fontWeight: "bold",
    fontSize: "$h5",
    textTransform: "uppercase",
    lineHeight: "$h5",
    letterSpacing: "$h5",
  },
  h6: {
    fontWeight: "bold",
    fontSize: "$h6",
    textTransform: "uppercase",
    lineHeight: "$h6",
    letterSpacing: "$h6",
  },
  ".overline": {
    fontWeight: "400",
    fontSize: "$overline",
    textTransform: "uppercase",
    lineHeight: "$overline",
    letterSpacing: "$overline",
  },
  ".sub_title": {
    fontWeight: "bold",
    fontSize: "$sub_title",
    textTransform: "uppercase",
    lineHeight: "$sub_title",
    letterSpacing: "$sub_title",
  },
});

function App() {
  globalStyles();
  return <DesignSystem />;
}

export default App;
