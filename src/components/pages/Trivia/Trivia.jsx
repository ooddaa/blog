import React, { useState, useEffect } from "react";
import { Navbar } from "@mantine/core";
import { AspectRatio } from "@mantine/core";
// https://mantine.dev/core/app-shell/

function Trivia2() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/watch?v=gdw17h4hPOw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}

const log = (...args) => console.log(...args);

function Trivia() {
  // return (
  //   <Navbar
  //     fixed
  //     position={{ top: 0, left: 0 }}
  //     width={{
  //       // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
  //       sm: 300,

  //       // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
  //       lg: 400,

  //       // When other breakpoints do not match base width is used, defaults to 100%
  //       base: 100,
  //     }}
  //   />
  // );

  /* Problem here is that this has to be determined before the first DOM rendered =>
  there is not mantine-Header-root element available => we need to hardcode the height value =>
  we could import its value or use CSS-in-JS library. 
  Nevertheless, this solution seems slower than pure css. IF user keeps resizing the window. */
  const [headerHeight] = useState(
    document.getElementsByClassName("mantine-Header-root")[0]?.offsetHeight ??
      56
  );
  const [footerHeight] = useState(
    document.getElementsByClassName("App-footer")[0]?.offsetHeight ?? 32
  );
  const [navbarHeight, setNavbarHeight] = useState(
    window.innerHeight - headerHeight - footerHeight
  );
  function resizeHandler(e) {
    setNavbarHeight(e.target.innerHeight - headerHeight - footerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="trivia" style={{ display: "flex" }}>
      <Navbar height={navbarHeight} p="xs" width={{ base: 300 }}>
        <Navbar.Section>{/* Header with logo */}</Navbar.Section>
        <Navbar.Section grow mt="md">
          {/* Links sections */}
        </Navbar.Section>
        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
    </div>
  );
}

export default Trivia;
