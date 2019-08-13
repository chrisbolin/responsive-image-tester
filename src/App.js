import React from "react";
import { Router, Link } from "@reach/router";

const srcSet = (widths, prefix) =>
  widths.map(width => `/${prefix}${width}.jpg ${width}w`).join(",\n");

const horizontalSrcSet = srcSet([900, 1200, 1600, 2400, 3200], "h");
const verticalSrcSet = srcSet([600, 900, 1280], "v");
const backup = "/original.jpg";
const alt = "sunset";

const HomeLink = () => (
  <p>
    <Link to="/">home</Link>
  </p>
);

const Home = () => (
  <div>
    <nav>
      <p>
        <Link to="/srcset">basic responsive image</Link> — img element with
        srcset attribute, client JavaScript rendering
      </p>
      <p>
        <Link to="/picture">advanced responsive image</Link> — picture with
        source elements and srcset attribute, client JavaScript rendering
      </p>
      <p>
        <a href="/server/srcset">basic responsive image, server only</a> — img
        element with srcset attribute, no client JavaScript
      </p>
      <p>
        <a href="/server/picture">advanced responsive image, server only</a> —
        picture with source elements and srcset attribute, no client JavaScript
      </p>
    </nav>
  </div>
);

const SrcSet = () => (
  <div>
    <HomeLink />
    <img srcSet={horizontalSrcSet} src={backup} alt={alt} />
  </div>
);

const Picture = () => (
  <div>
    <HomeLink />
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
