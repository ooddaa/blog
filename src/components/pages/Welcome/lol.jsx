import React from "react";
import AppContent from "../../AppContent";
import { Text, Title } from "@mantine/core";
import { GradientSpan, Span, Bold } from "../../../toolbox";

function Welcome() {
  return (
    <div className="welcome-bg-img">
      <AppContent
        style={{ backgroundColor: "rgb(250, 251, 253)" }}
        children={
          <div className="welcome pt-12">
            <div className="mb-8">
              <Title order={1}>Lorem, world!</Title>
            </div>
            <Text>
              <div className="pb-4">
                I am <span className="oda">oda</span>, welcome to my{" "}
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

              <div className="pb-4">
                I learn by doing, so every day, after breakfast, I like to have
                a go at some challenging task: coding/learning
                psychology/bringing up my lovely son/living here and now and
                stuff like that.
              </div>

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
                <Bold>
                  So feel free to poke around and let me know what you think.
                </Bold>
              </div>
            </Text>
          </div>
        }
      />
    </div>
  );
}

export default Welcome;
