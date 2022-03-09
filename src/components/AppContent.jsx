import { Fragment } from "react";
import clsx from "clsx";

function AppContent({ post, children }) {
  return (
    <Fragment>
      <div className={clsx("App-content")}>{children}</div>
    </Fragment>
  );
}

export default AppContent;
