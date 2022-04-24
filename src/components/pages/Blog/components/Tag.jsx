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
      // e.target?.classList.add("bg-yellow-400");
      e.target.style.backgroundColor = "lightgrey";
      setClicked(false);
    } else {
      e.target.style.backgroundColor = "yellow";
      // e.target?.style.backgroundColor = 'black'
      setClicked(true);
    }
  }
  /**
   * @todo If nothing to highlight, all tags are yellow.
   * We aren't actually highlighting, we are dimming tags.
   */
  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 m-2 h-auto w-max rounded-full text-sm transition delay-50",
        highlightedTags?.includes(tag) ? "bg-yellow-200" : "bg-gray-200"
      )}
      onClick={handleClick}
    >
      {tag}
    </Center>
  );
}
