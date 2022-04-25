import { useState } from "react";
import { Center, createStyles } from "@mantine/core";
import { log } from "../../../../toolbox/index";

export default function Tag({ tag, classNames, highlightedTags, sendTagUp }) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    sendTagUp(tag);
    if (clicked) {
      // e.target.style.backgroundColor = "lightgrey";
      // e.target.style.backgroundColor = "#e5e5e5"; //neutral-200
      // e.target.style.backgroundColor = "#e7e5e4"; //stone-200
      e.target.style.backgroundColor = "transparent"; //

      setClicked(false);
    } else {
      e.target.style.backgroundColor = "#fef08a"; // bg-yellow-200
      e.target.style.backgroundColor = "#facc15"; // bg-yellow-400
      // e.target.style.backgroundColor = "#67e8f9"; // bg-cyan-300
      // e.target.style.backgroundColor = "#ccfbf1"; // bg-teal-100
      // e.target.style.backgroundColor = "#BA3C3C"; //
      setClicked(true);
    }
  }
  /**
   * @todo If nothing to highlight, all tags are yellow.
   * We aren't actually highlighting, we are dimming tags.
   * https://tailwindcss.com/docs/customizing-colors
   */
  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 m-2 h-auto w-max rounded-full text-sm transition delay-50 select-none hover:cursor-pointer",
        highlightedTags?.includes(tag)
          ? "bg-red-500"
          : // ? "bg-[#BA3C3C]"
            // ? "bg-[#B8FFE7]"
            // ? "bg-[#5ED65E]"
            // ? "bg-[#4646B3]"
            "bg-transparent"
      )}
      onClick={handleClick}
    >
      {tag}
    </Center>
  );
}
