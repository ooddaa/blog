import React, { useState } from "react";
import Tag from "./Tag.jsx";
import { log, emptyObject } from "../../../../toolbox/index";
import { createStyles } from "@mantine/core";
import { TagContainer } from "../../../../toolbox/types.d.ts";

const BlogTags: React.FC<TagContainer[]> = ({
  tagContainers,
  highlightedTags,
  sendTagUp,
  classNames,
}) => {
  const { cx } = createStyles(emptyObject)();
  const defaultClasses = "blog-tags flex flex-wrap";

  return (
    <div
      className={cx(defaultClasses, classNames)}
      style={{
        position: "sticky",
        top: "0",
      }}
    >
      {tagContainers?.sort().map((tag) => (
        <Tag
          tag={tag}
          key={tag}
          highlightedTags={highlightedTags}
          sendTagUp={sendTagUp}
        />
      ))}
    </div>
  );
};

export default BlogTags;
