/**@jsxImportSource @emotion/react */

import React from "react";
import TableOfContents from "./components/TableOfContents.tsx";
import ReferenceForm from "./components/ReferenceForm/ReferenceForm.tsx";
import { styles as ReferenceFormStyles } from "./components/ReferenceForm/styles/styleSystem.ts";

const links = [
  { label: "Reference Form", link: "#", order: 1 },
  { label: "Custom Select", link: "#", order: 2 },
  { label: "Input Field", link: "#", order: 2 },
];
export default function Portfolio() {
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
          margin: "36px",
        }}
      >
        <TableOfContents links={links} active={""}></TableOfContents>
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
        <ReferenceForm></ReferenceForm>
      </div>

    </div>
  );
}
