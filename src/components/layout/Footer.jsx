import { createStyles } from "@mantine/core";

export default function AppFooter({ classes }) {
  const { cx } = createStyles(() => ({}))();
  return (
    // <div className="App-footer bg-transparent">
    <div className={cx(
      ["App-footer", "bg-transparent", classes]
    )}>
      {/* <p className="text-gray-500 text-sm p-4">  */}
      <p className="text-gray-500 text-sm"> 
        made with 👾 by <span className="oda text-amber-500">oda</span> in 2022 | photo by{" "}
        <a href="https://unsplash.com/photos/cBhk90BuOeU">Greg Torosiants</a>
      </p>
    </div>
  );
}
