import React, { useState, useEffect } from "react";
import {
  AppShell,
  Navbar,
  Header,
  createStyles,
  keyframes,
} from "@mantine/core";
import { Bluetooth } from "tabler-icons-react";
// https://mantine.dev/core/app-shell/

const log = (...args) => console.log(...args);

const roundTrip = keyframes({
  "0%": { transform: "translate(0)" },
  // "33%": { transform: "translateY(100%)" },
  // "66%": { transform: "translate(100%, 100%)" },
  "100%": { transform: "translateX(100%)" },
});
const useStyles = createStyles((theme, _params, getRef) => ({
  parent: {
    backgroundColor: "darkblue",
    height: "400px",
    width: "800px",
    [`&:hover .${getRef("child")}`]: {
      // transform: "translateX(100%)",
      // backgroundColor: "yellow",

      animation: `${roundTrip} 1s ease-in forwards`,
    },
  },

  child: {
    ref: getRef("child"),
    backgroundColor: "red",
    height: "50%",
    width: "25%",
    transition: "transform 1s ease-in",
  },
}));

function Playground() {
  const { classes, cx } = useStyles();
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <>
        <div className={cx("parent", classes.parent)}>
          <div className={cx("child", classes.child)}></div>
        </div>
      </>
    </AppShell>
  );
}

function Playground1() {
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
    document.getElementsByClassName("App-footer")[0]?.offsetHeight ?? 0
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
    <div className="playground" style={{ display: "flex" }}>
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

export default Playground;
