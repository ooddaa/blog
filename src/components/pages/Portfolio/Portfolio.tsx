/**@jsxImportSource @emotion/react */

import React, { useState } from "react";
import TableOfContents from "./components/TableOfContents";
import ReferenceForm from "./components/ReferenceForm/ReferenceForm";
import CustomSelect from "./components/ReferenceForm/CustomSelect";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import { styles as ReferenceFormStyles } from "./components/ReferenceForm/styles/styleSystem";
import MantineHeader, { HEADER_HEIGHT } from "../../layout/MantineHeader";

const headerLinks = [
  {
    link: "/",
    label: "Main",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "https://github.com/ooddaa",
    label: "Github",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
  {
    link: "/playground",
    label: "Playground",
  },
];

const components: { [key: string]: JSX.Element } = {
  "Reference Form": <ReferenceForm />,
  "TicTacToe": <TicTacToe />,
  "Custom Select": (
    <CustomSelect
      value={"Portfolio"}
      options={[
        { value: "🎢 Rollercoaster" } /**@todo add a header to option */,
        { value: "♕ Queen" },
        { value: "🏂 Snowboarding" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />
  ),
};

const links = [
  { label: "Reference Form", link: "Reference Form", order: 1 },
  { label: "Custom Select", link: "Custom Select", order: 2 },
  { label: "TicTacToe", link: "TicTacToe", order: 1 },
];

export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    components["ReferenceForm"]
  );

  const selectComponent = (componentName: string) => {
    setCurrentComponent(components[componentName]);
  };

  return (
    <>
      <MantineHeader links={headerLinks}></MantineHeader>

      <div
        className="portfolio"
        css={{
          display: "grid",
          "grid-template-columns": "300px 1fr",
          width: "100vw",
        }}
        style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`}}
      >
        {/* NavBar */}
        <div
          className="portfolio-toc"
          css={{
            padding: "36px",
            borderRight: `1px solid ${ReferenceFormStyles.colors["border-primary"]}`,
          }}
        >
          <TableOfContents
            links={links}
            active={""}
            onClick={selectComponent}
          ></TableOfContents>
        </div>

        {/* WORKSPACE */}
        <div
          className="portfolio-workspace"
          css={{
            height: "auto",
            backgroundColor: ReferenceFormStyles.colors["bg-primary"],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentComponent}
        </div>
      </div>
    </>
  );
}
