/**@jsxImportSource @emotion/react */

import React, {useState} from "react";
import TableOfContents from "./components/TableOfContents";
import ReferenceForm from "./components/ReferenceForm/ReferenceForm";
import CustomSelect from './components/ReferenceForm/CustomSelect';
import { styles as ReferenceFormStyles } from "./components/ReferenceForm/styles/styleSystem";

const components: { [key: string]: JSX.Element } = {
  "Reference Form": (<ReferenceForm />),
  "Custom Select": (<CustomSelect 
    value={"Portfolio"} 
    options={[
      { value: "🎢 Rollercoaster" }, /**@todo add a header to option */
      { value: "♕ Queen" },
      { value: "🏂 Snowboarding" },
    ]}
    onChange={(e) => console.log(e.target.value)}
    />),
}

const links = [
  { label: "Reference Form", link: "Reference Form", order: 1 },
  { label: "Custom Select", link: "Custom Select", order: 2 },
];


export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(components['ReferenceForm']);
  
  const selectComponent = (componentName: string) => {
    setCurrentComponent(components[componentName]);
  }

  return (
    <div
      className="portfolio"
      css={{
        display: "grid",
        "grid-template-columns": "300px 1fr",
        minHeight: "100vh",
        width: "100vw",
      }}
    >

      {/* NavBar */}
      <div
        className="portfolio-toc"
        css={{
          padding: "36px",
          borderRight: `1px solid ${ReferenceFormStyles.colors["border-primary"]}`,
          boxShadow: `0 0 10px ${ReferenceFormStyles.colors["border-primary"]}`,
        }}
      >
        <TableOfContents links={links} active={""} onClick={selectComponent}></TableOfContents>
      </div>


      {/* WORKSPACE */}
      <div className="portfolio-workspace"
        css={{
          height: 'auto',
          minHeight: "100vh",
          backgroundColor: ReferenceFormStyles.colors["bg-primary"],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <ReferenceForm></ReferenceForm> */}
        {currentComponent}
      </div>

    </div>
  );
}
