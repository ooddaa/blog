import React, { useState } from "react";
import AppFooter from "../../layout/Footer";
import { Text, Highlight } from "@mantine/core";
import { GradientSpan, Span, Bold, PB4 } from "../../../toolbox";
import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome(): JSX.Element {
  /**
   * I want two screens height.
   * ODA centers in first screen,
   * all text - is centered in the second with background image
   */
  const [windowHeight] = useState(`${window.innerHeight * 3 + 4}px`);

  return (
    <div className={`welcome w-screen`} style={{ height: windowHeight }}>
      {/* Oda */}
      <section className="welcome--name h-1/3 w-full bg-white flex justify-center items-center">
        <div className="font-['Italiana'] font-medium text-7xl text-black-500">
          oda
        </div>
      </section>

      {/* hello world */}
      <section className="welcome--lorem font-['Italiana'] h-1/3 w-full bg-baby-powder flex flex-col justify-center items-center text-gray-900">
        <div className="container-1-4 w-3/4">
          {/* hell world */}
          <div
            className="mb-32 text-[64px] font-semibold flex flex-row justify-center items-center"
            style={{ textAlign: "center" }}
          >
            {"Hello, World!"}
          </div>

          <div className="mb-16 font-['Inter'] text-[18px] font-medium flex flex-col justify-center items-center gap-4 relative">
            {/* <span>welcome to my</span> */}

            <div className="navbar-links">
              <Link to="/blog">
                <GradientSpan from="grape" to="orange">
                  blog
                </GradientSpan>
              </Link>
              
              {" "}
              <Span color="grey">|</Span>{" "}
              <Link to="/portfolio">
                <GradientSpan from="green" to="black">
                portfolio
                </GradientSpan>
              </Link>
              
              {" "}
              <Span color="grey">|</Span>{" "}
              <a href="https://github.com/ooddaa">
                <GradientSpan from="blue" to="grape">
                  github
                </GradientSpan>
              </a>

              {" "}
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

      {/* bio */}
      <section className="bio">
        <div className="welcome-last-text bg-[#F9FAFD] h-5/6 w-full flex flex-col justify-start items-center">
          <Text size="lg" className={`
          my-12 mx-8 px-8 
          sm:md-16 sm:px-16 
          md:mx-20 md:px-20 
          lg:mx-32 lg:px-32
          xl:mx-48 xl:px-48 
          text-sm sm:text-lg sm:leading-8 font-['Inter']`}>
            <div className="pb-4">
              Over the past decade, working as a{" "}
              <GradientSpan from="green" to="cyan">
                Business Developer
              </GradientSpan>{" "}
              /{" "}
              <GradientSpan from="red" to="orange">
                Software Engineer
              </GradientSpan>{" "}
              I have accumulated a bunch of googlesheets, notes, business ideas
              and projects that I would like to keep playing with. To ogranize
              those a bit better and motivate myself to develop{" "}
              <Highlight highlight={"more, I created this blog."}>
                more, I created this blog.
              </Highlight>
            </div>

            <PB4 tailwindClasses="mt-12">
              <Bold>Fun fact:</Bold> the highlighted phrase above was actually
              synthesized by{" "}
              <a href="https://copilot.github.com/">GitHubCopilot</a>.{" "}
              <i>
                I'm not sure if it's a good idea to use a third-party service to
                synthesize text, but I'm sure it's a good idea to use a
                third-party service to synthesize text.
              </i>{" "}
              {"<-"} as was this one as well...
            </PB4>

            <PB4 tailwindClasses="mt-12">
              My <a href="https://github.com/med4kat">wife</a> is amazing and we
              have a wonderful toddler son ☺️
            </PB4>

            <div className="mb-8">
              I also like <a href="https://www.wavebjj.co/">BJJ</a>.
            </div>
          </Text>
        </div>
      </section>
      {/* image with paralax */}
      <section className="welcome--img bg-center h-1/5 w-full">
        <div className="welcome-footer h-full flex flex-col justify-end items-center">
          <AppFooter classes=""></AppFooter>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
