import React, { useState } from "react";
import Tag from "./Tag.jsx";
import { log } from "../../../../toolbox/index";
import { createStyles } from "@mantine/core";
import { TagContainer } from "../../../../toolbox/types.d.ts";

const BlogTags: React.FC<TagContainer[]> = ({ classNames, tagContainers }) => {
  // log(tagContainers);
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();
  return (
    <div className={cx("blog-tags", classNames)}>
      {tagContainers.map((tag /* , ref */) => (
        <Tag tag={tag} /* ref={ref} */ />
      ))}
    </div>
  );
};

export default BlogTags;
