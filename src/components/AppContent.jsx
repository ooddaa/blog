import { Fragment } from "react";
import clsx from "clsx";

/**
 * Centers children's content
 * Adds min height of viewport height - header - footer to
 * stick footer.
 */
function AppContent({ children }) {
  return (
    <Fragment>
      <div className={clsx("App-content")}>{children}</div>
    </Fragment>
  );
}

export default AppContent;
