import { useState } from "react";
import AppFooter from "../../layout/Footer";
import { Text, Title } from "@mantine/core";
import { GradientSpan, Span, Bold } from "../../../toolbox";

function Welcome(): JSX.Element {
  /**
   * I want two screens height.
   * ODA centers in first screen,
   * all text - is centered in the second with background image
   */
  const [windowHeight] = useState(`${window.innerHeight * 3 + 4}px`);

  return (
    <div className={`welcome w-screen`} style={{ height: windowHeight }}>
      <section className="welcome--name h-1/3 w-full bg-white flex justify-center items-center">
        <div className="font-['Italiana'] font-medium text-7xl text-black-500">
          Oda
        </div>
      </section>

      <section className="welcome--lorem font-['Inter'] h-1/3 w-full bg-orange-400/50 flex flex-col justify-center items-center text-gray-800 ">
        <div className="welcome--lorem--container w-1/4"> 
        <div className="mb-24 text-[48px] font-semibold">
          {/* <Title order={1}>Lorem, world!</Title> */}
          Lorem, world!
          My name is <span className="oda font-['Italiana'] text-black">ODA</span>
        </div>
        <div className="mb-16 text-lg font-normal">
              Welcome to my{" "}
              <GradientSpan from="blue" to="grape">
                portfolio
              </GradientSpan>{" "}
            <Span color="grey">|</Span>{" "}
              <GradientSpan from="grape" to="orange">
                blog
              </GradientSpan>{" "}
              <Span color="grey">|</Span>{" "}
              <GradientSpan from="orange" to="green">
                playground
              </GradientSpan>{" "}
        </div>
        <div className="mb-4 text-lg font-normal leading-loose">
              I learn by doing, so every day, after breakfast, I like to have a
              go at some challenging task: coding/learning psychology/bringing
              up my lovely son/living here and now and stuff like that.
            </div>
        
        </div>
      </section>

      <section className="welcome--lorem font-['Inter'] h-1/3 w-full bg-[#F8FBFD] flex flex-col justify-center items-center">
      <div className="pb-4">
              I learn by doing, so every day, after breakfast, I like to have a
              go at some challenging task: coding/learning psychology/bringing
              up my lovely son/living here and now and stuff like that.
            </div>
      </section>

      <section className="welcome--lorem font-['Inter'] h-1/3 w-full bg-teal-400/50 flex flex-col justify-center items-center">

        
      </section>

      <section className="welcome--img h-1/3 w-full flex flex-col justify-center items-center">
        <div className="welcome--text pl-[100px] pr-[100px] mx-auto">
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
              I have accumulated a bunch of googlesheets, notes, business ideas
              and projects that I would like to keep playing with.
            </div>

            <div className="pb-4">
              My <a href="https://github.com/med4kat">wife</a> is amazing and we
              have a wonderful toddler son ☺️
            </div>
            <div className="pb-4">
              I also like <a href="https://www.wavebjj.co/">BJJ</a>.
            </div>

            <div className="pb-4">
              <Bold>
                So feel free to poke around and let me know what you think.
              </Bold>
            </div>
          </Text>
        </div>
        {/* <div className="lol123 h-full w-full"></div> */}
        <AppFooter></AppFooter>
      </section>
    </div>
  );
}
export default Welcome;
