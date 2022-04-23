import React from "react";
import AppContent from "../../AppContent";
import { Text, Title } from "@mantine/core";
import { GradientSpan, Span } from "../../../toolbox";

function Welcome() {
  return (
    <div className="welcome-bg-img">
      <AppContent
        style={{ backgroundColor: "rgb(250, 251, 253)" }}
        children={
          <div className="welcome">
            <div className="pb--1rem">
              <Title order={1}>Lorem, world!</Title>
            </div>
            <Text>
              <div className="pb--1rem">
                Welcome to my personal website! My name is{" "}
                <span className="oda">oda</span>.
              </div>

              <div className="pb--1rem">
                I learn by doing, so every day, after breakfast, I like to have
                a go at some challenging task: coding/learning
                psychology/bringing up my lovely son/living here and now and
                stuff like that.
              </div>

              <div className="pb--1rem">
                Over the past several years, working as a{" "}
                <GradientSpan from="green" to="cyan">
                  Business Developer
                </GradientSpan>
                , I have accumulated a bunch of googlesheets, notes, business
                ideas and projects of various quality.
              </div>

              <div className="pb--1rem">
                I have decided to put it all in one place online as a personal{" "}
                <GradientSpan from="blue" to="grape">
                  portfolio
                </GradientSpan>{" "}
                <Span color="grey">|</Span>{" "}
                <GradientSpan from="grape" to="orange">
                  blog
                </GradientSpan>{" "}
                <Span color="grey">|</Span>{" "}
                <GradientSpan from="orange" to="green">
                  virutal lab
                </GradientSpan>
              </div>

              <div className="pb--1rem">
                My <a href="https://github.com/med4kat">wife</a> is amazing and
                we have a wonderful toddler son ☺️
              </div>
              <div className="pb--1rem">
                I also like <a href="https://www.wavebjj.co/">BJJ</a>.
              </div>
            </Text>
          </div>
        }
      />
    </div>
  );
}

export default Welcome;
