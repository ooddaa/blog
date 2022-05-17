import { useState } from "react";
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
          <div className="mb-32 text-[64px] font-semibold flex flex-row justify-center items-center">
            hello, world!
          </div>

          <div className="mb-16 text-lg font-normal flex flex-row justify-center items-center gap-4">
            welcome to my{" "}
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

              <div className="pb-4">
                My <a href="https://github.com/med4kat">wife</a> is amazing and
                we have a wonderful toddler son ☺️
              </div>
              <div className="pb-4">
                I also like <a href="https://www.wavebjj.co/">BJJ</a>.
              </div>

              <div className="pb-4">
                <Bold>Please to poke around and let's chat.</Bold>
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

