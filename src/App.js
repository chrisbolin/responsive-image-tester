import React from "react";
import { Router } from "@reach/router";

const srcSet = (widths, prefix) =>
  widths.map(width => `${prefix}${width}.jpg ${width}w`).join(",\n");

const horizontalSrcSet = srcSet([900, 1200, 1600, 2400, 3200], "h");
const verticalSrcSet = srcSet([600, 900, 1280], "v");
const backup = "original.jpg";
const alt = "sunset";

const Home = () => <div>home</div>;

const SrcSet = () => <img srcSet={horizontalSrcSet} src={backup} alt={alt} />;

const Picture = () => (
  <div>
    <picture>
      <source media="(max-width: 499px)" srcSet={verticalSrcSet} />
      <source media="(min-width: 500px)" srcSet={horizontalSrcSet} />
      <img src={backup} alt={alt} />
    </picture>
  </div>
);

function App() {
  return (
    <Router>
      <Home path="/" />
      <SrcSet path="/srcset" />
      <Picture path="/picture" />
    </Router>
  );
}

export default App;
