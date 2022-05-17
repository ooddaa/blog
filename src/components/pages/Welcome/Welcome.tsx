import { useState, useEffect } from "react";
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
  // const [navbarLinks] = useState(document.getElementsByClassName("navbar-links")[0])
  

  const handleScroll = (offsetY) => {
    const inner = (e) => {
      // window.pageYOffset // how much page has been scrolled by Y axis
    // document.body.offsetHeight // total doc.body height == windowHeight
    // window.innerHeight // screen height
    const howMuchUserScrolledPrc = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    // console.log(howMuchUserScrolledPrc)
    
    // /* record elements' initial offset from the top */
    // const offsetY = navbarLinks.getBoundingClientRect().top
    // console.assert(typeof offsetY === 'number', 'offsetY is expected to be a number')
    // console.log(offsetY, window.pageYOffset)
    /* calculate  */
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    if (window.pageYOffset >= offsetY) {
      /* stick navbar-links to the top */
      // console.dir(navbarLinks.getBoundingClientRect())
      console.log('we need to get sticky!')
      navbarLinks.style.setProperty('position', 'fixed')
      navbarLinks.style.setProperty('top', '5px')
    } else {
      navbarLinks.style.removeProperty('position')
      navbarLinks.style.removeProperty('top')
    }
    }
    return inner
  }
  /* set up scroll observer */
  useEffect(() => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    /* record elements' initial offset from the top */
    const offsetY = navbarLinks.getBoundingClientRect().top
    console.assert(typeof offsetY === 'number', 'offsetY is expected to be a number')
    window.addEventListener('scroll', handleScroll(offsetY))
  }, [])
  return (
    <div className={`welcome w-screen`} style={{ height: windowHeight }}>
      {/* Oda */}
      <section className="welcome--name h-1/3 w-full bg-white flex justify-center items-center">
        <div className="font-['Italiana'] font-medium text-7xl text-black-500">
          oda
        </div>
      </section>

      {/* <div className="some-dumb-wrapper">
      <div className="sticky-div" style={{ position: 'sticky', top: 0 }}>blablablab</div>
      </div> */}

      {/* hello world */}
      <section className="welcome--lorem font-['Inter'] h-1/3 w-full bg-baby-powder flex flex-col justify-center items-center text-gray-900">
        <div className="container-1-4 w-1/4">

          {/* hell world */}
          <div className="mb-32 text-[64px] font-semibold flex flex-row justify-center items-center">
            hello, world!
          </div>

          <div className="mb-16 text-lg font-normal flex flex-col justify-center items-center gap-4 relative">
            <div>welcome to my</div>

            <div className="navbar-links">
              <a href="https://github.com/ooddaa">
                <GradientSpan from="blue" to="grape">
                  portfolio
                </GradientSpan>
              </a>{" "}
              <Span color="grey">|</Span>{" "}
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
              </Link>
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

              <div className="mb-4 flex justify-center">
                <Bold>Please poke around and let's chat.</Bold>
              </div>
            </Text>
          </div>
        </div>
        <div className="welcome-footer h-1/6 flex flex-col justify-end items-center">
          <AppFooter classes="lol"></AppFooter>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
