/**@jsxImportSource @emotion/react */

import React, {useState} from "react";
import TableOfContents from "./components/TableOfContents.tsx";
import ReferenceForm from "./components/ReferenceForm/ReferenceForm.tsx";
import CustomSelect from './components/ReferenceForm/CustomSelect.tsx';
import { selectStyles } from './components/ReferenceForm/ReferenceForm.tsx'
import InputField from './components/ReferenceForm/InputField.tsx'
import { inputStyles } from './components/ReferenceForm/ReferenceForm.tsx'
import { styles as ReferenceFormStyles } from "./components/ReferenceForm/styles/styleSystem.ts";

const components = {
  "ReferenceForm": (<ReferenceForm />),
  "CustomSelect": (<CustomSelect 
    styles={selectStyles}
    value={"Portfolio"} 
    options={[
      { value: "Rollercoaster: 🎢" }, 
      { value: "Queen: ♕" },
    ]}
    />),
  "InputField": (<InputField styles={inputStyles('text')}/>),
}

const links = [
  { label: "Reference Form", link: "ReferenceForm", order: 1 },
  { label: "Custom Select", link: "CustomSelect", order: 2 },
  { label: "Input Field", link: "InputField", order: 2 },
];


export default function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState(components[0]);
  
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
