import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayoutDefault = ({ children }) => (
  <Fragment>
    <Header />
    <main className="site-content">{children}</main>
    <Footer />
  </Fragment>
);

export default LayoutDefault;
