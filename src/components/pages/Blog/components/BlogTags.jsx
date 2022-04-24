import React, { useState } from "react";
import Tag from "./Tag.jsx";
import { log } from "../../../../toolbox/index";
import { createStyles } from "@mantine/core";
import { TagContainer } from "../../../../toolbox/types.d.ts";

const BlogTags: React.FC<TagContainer[]> = ({
  classNames,
  tagContainers,
  highlightedTags,
  sendTagUp,
}) => {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();

  return (
    <div className={cx("blog-tags", classNames)}>
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
