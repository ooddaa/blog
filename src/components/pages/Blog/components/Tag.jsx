import { Center, createStyles } from "@mantine/core";
import { log } from "../../../../toolbox/index";
import isArray from "lodash/isArray";

export default function Tag({ tag, classNames, highlightedTags }) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();

  // log("tag renders: ", highlightedTags);

  /**
   * If nothing to highlight, all tags are yellow.
   * We aren't actually highlighting, we are dimming tags.
   */
  const classes1 =
    highlightedTags && isArray(highlightedTags) && highlightedTags.length == 0
      ? highlightedTags.includes(tag)
        ? "bg-yellow-200"
        : "bg-gray-200"
      : "bg-yellow-200";

  // let classes;

  // if ()

  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 m-2 h-auto w-max rounded-full text-sm transition delay-100",
        // classes1
        highlightedTags?.includes(tag) ? "bg-yellow-200" : "bg-gray-200"
      )}
    >
      {tag}
    </Center>
  );
}
