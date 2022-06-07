import React, { useState, useEffect } from "react";
import AppFooter from "../../layout/Footer";
import { Text } from "@mantine/core";
import { GradientSpan, Span, Bold } from "../../../toolbox";
import { Link } from "react-router-dom";

function Welcome(): JSX.Element {
  /**
   * I want two screens height.
   * ODA centers in first screen,
   * all text - is centered in the second with background image
   */
  const [windowHeight] = useState(`${window.innerHeight * 3 + 4}px`);
  // const [offsetY, setNavbarOffsetY] = useState<number>(JSON.parse(localStorage.getItem("offsetY")))

  const handleScroll = (offsetY: number) => {
    const inner = (e: Event) => {
      /* window.pageYOffset // how much page has been scrolled by Y axis */
      /* window.innerHeight // screen height == document.body.offsetHeight */

      /* calculate  */
      const navbarLinks: any =
        document.getElementsByClassName("navbar-links")[0];

        // console.table({
        //   pageYOffset: window.pageYOffset,
        //   innerHeight: window.innerHeight,
        //   scrolled: window.pageYOffset / window.innerHeight,
        //   storedOffsetY: offsetY,
        //   realOffsetY: navbarLinks.getBoundingClientRect().top
        // })

      if (window.pageYOffset >= offsetY) {
        /* stick navbar-links to the top */
        navbarLinks?.style?.setProperty("position", "fixed");
        navbarLinks?.style?.setProperty("top", "5px");
      } else {
        navbarLinks?.style?.removeProperty("position");
        navbarLinks?.style?.removeProperty("top");
      }
    };
    return inner;
  };

  /* init */
  useEffect(() => {
    /* scroll to top */
    window.scrollTo({ top: 0, behavior: "smooth" });

    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    /* save elements' initial offset from the top to persist in localStorage*/
    if (!localStorage.getItem("offsetY")) {
      // localStorage.clear()

      const offsetY = navbarLinks.getBoundingClientRect().top
      console.log('init offsetY to', offsetY)
      localStorage.setItem("offsetY", JSON.stringify(offsetY))
      // setNavbarOffsetY(JSON.parse(localStorage.getItem("offsetY")))

      /* remember window size */
      localStorage.setItem('windowSize', JSON.stringify(window.innerHeight))
    }


    /* update if user has resized window */
    const oldWindow = JSON.parse(localStorage.getItem("windowSize"))
    const currentWindow = window.innerHeight
    // console.table({
    //   oldWindow, currentWindow,
    // })
    if (oldWindow !== currentWindow) {
      console.log("oldWindow !== currentWindow")

      // console.table({
      //   oldOffset: localStorage.getItem("offsetY"),
      //   newOffsetY: navbarLinks.getBoundingClientRect().top + window.pageYOffset
      // })
      /* reset offsetY */
      localStorage.removeItem("offsetY")
      localStorage.setItem("offsetY", JSON.stringify(navbarLinks.getBoundingClientRect().top + window.pageYOffset))
      // setNavbarOffsetY(navbarLinks.getBoundingClientRect().top + window.pageYOffset)

      /* reset window */
      localStorage.removeItem("windowSize")
      localStorage.setItem('windowSize', JSON.stringify(window.innerHeight))
    }
    // console.log('offsetY', offsetY)
    
    // console.assert(
    //   typeof offsetY === "number",
    //   "offsetY is expected to be a number"
    //   );

    /* set up scroll observer */
    window.addEventListener("scroll", handleScroll(JSON.parse(localStorage.getItem("offsetY"))));
  }, []);

  return (
    <div className={`welcome w-screen`} style={{ height: windowHeight }}>
      {/* Oda */}
      <section className="welcome--name h-1/3 w-full bg-white flex justify-center items-center">
        <div className="font-['Italiana'] font-medium text-7xl text-black-500">
          oda
        </div>
      </section>

      {/* hello world */}
      <section className="welcome--lorem font-['Inter'] h-1/3 w-full bg-baby-powder flex flex-col justify-center items-center text-gray-900">
        <div className="container-1-4 w-1/4">
          {/* hell world */}
          <div
            className="mb-32 text-[64px] font-semibold flex flex-row justify-center items-center"
            style={{ textAlign: "center" }}
          >
            {'Hello, World!'}
          </div>

          <div className="mb-16 text-lg font-normal flex flex-col justify-center items-center gap-4 relative">
            <div>welcome to my</div>

            <div className="navbar-links">
              <Link to="/blog">
                <GradientSpan from="grape" to="orange">
                  blog
                </GradientSpan>
              </Link>{" "}
              <Span color="grey">|</Span>{" "}
              <Link to="/playground">
                <GradientSpan from="orange" to="green">
                  playground
                </GradientSpan>
              </Link>{" "}
              <Span color="grey">|</Span>{" "}
              <a href="https://github.com/ooddaa">
                <GradientSpan from="blue" to="grape">
                  github
                </GradientSpan>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* image with paralax */}
      <section className="welcome--img h-1/3 w-full">
        <div className="welcome-last-text h-5/6 w-full flex flex-col justify-start items-center">
          <div className="mt-48 container-1-4 w-1/4 ">
            <Text>
              <div className="pb-4">
                Over the past decade, working as a{" "}
                <GradientSpan from="green" to="cyan">
                  Business Developer
                </GradientSpan>{" "}
                /{" "}
                <GradientSpan from="red" to="orange">
                  Software Engineer
                </GradientSpan>{" "}
                I have accumulated a bunch of googlesheets, notes, business
                ideas and projects that I would like to keep playing with.
              </div>

              <div className="mb-4">
                My <a href="https://github.com/med4kat">wife</a> is amazing and
                we have a wonderful toddler son ☺️
              </div>
              <div className="mb-8">
                I also like <a href="https://www.wavebjj.co/">BJJ</a>.
              </div>
            </Text>
          </div>
        </div>
        <div className="welcome-footer h-1/6 flex flex-col justify-end items-center">
          <AppFooter classes=""></AppFooter>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
