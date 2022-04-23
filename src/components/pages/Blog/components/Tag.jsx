import { Center, createStyles } from "@mantine/core";
import { log } from "../../../../toolbox/index";

export default function Tag({ tag, classNames, highlightedTags }) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();

  /**
   * @todo If nothing to highlight, all tags are yellow.
   * We aren't actually highlighting, we are dimming tags.
   */

  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 m-2 h-auto w-max rounded-full text-sm transition delay-100",
        highlightedTags?.includes(tag) ? "bg-yellow-200" : "bg-gray-200"
      )}
    >
      {tag}
    </Center>
  );
}
