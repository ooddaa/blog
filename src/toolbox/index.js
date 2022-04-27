import React from "react";
import { Text, createStyles } from "@mantine/core";
import { Prism } from "@mantine/prism";

import { Post } from "./types.d.ts";

const log = (...args) => console.log(...args);

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function resolveMonth(num: number, config: { short: boolean } = {}): string {
  const mapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  if (config.short) return mapping[num].slice(0, 3);
  return mapping[num];
}

/* https://mantine.dev/core/text/ */
function Span({ children, ...props }) {
  return (
    <Text component="span" {...props}>
      {children}
    </Text>
  );
}

function Bold({ children, ...props }) {
  return (
    <Span weight={700} {...props}>
      {children}
    </Span>
  );
}

function Super({ children, ...props }) {
  return (
    <Span
      className="super-scripted"
      style={{ verticalAlign: "super", display: "inline-block" }}
    >
      {children}
    </Span>
  );
}

function GradientSpan({ children, from, to, ...props }) {
  return (
    <Span
      variant="gradient"
      gradient={{
        from: from ?? "indigo",
        to: to ?? "cyan",
        deg: 45,
      }}
      weight={props?.weight ?? 600}
      {...props}
    >
      {children}
    </Span>
  );
}

function JS({ children, tailwindClasses, ...props }) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "pb-4";
  return (
    <Prism
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      language="javascript"
      withLineNumbers
      {...props}
    >
      {children}
    </Prism>
  );
}

function Emoji({ children, props, style, classNames }) {
  const { cx } = createStyles(() => ({}))();
  return (
    <div
      className={cx("emoji", classNames)}
      style={
        style
          ? { display: "inline-block", ...style }
          : { display: "inline-block", paddingRight: "1rem" }
      }
      {...props}
    >
      {children}
    </div>
  );
}

interface HProps {
  children: any;
  props?: Object;
  style?: Object;
  tailwindClasses?: string[];
}

const H3: React.FC<HProps> = ({ children, props, style, tailwindClasses }) => {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "font-bold text-2xl pb-4 tracking-tight";
  return (
    <h3
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      style={style ?? {}}
      {...props}
    >
      {children}
    </h3>
  );
};
const H2: React.FC<HProps> = ({ children, props, style, tailwindClasses }) => {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "font-bold text-3xl pb-4 tracking-tight";
  return (
    <h2
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      style={style ?? {}}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * Turns Post[] into a tree, sorting by year and month.
 *
 * @nonPure Produces side effects.
 * @param {Post} posts
 * @param {Map} tree
 * @returns {Map}
 */
function treefyPosts(posts: Post[], tree = new Map()): Map {
  posts.forEach((post) => {
    const [year, month] = post.dateCreated;
    tree.has(year)
      ? tree.get(year).has(month)
        ? tree.get(year).get(month).push(post)
        : tree.get(year).set(month, [post])
      : tree.set(year, new Map().set(month, [post]));
  });
  return tree;
}

function TLDR({ children, props }) {
  return (
    <div className="tl-dr pb-16" {...props}>
      <Span
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        weight={600}
      >
        TL/DR:{" "}
      </Span>
      {children}
    </div>
  );
}
function P({ children, pb, props, tailwindClasses }) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = `pb-${pb ?? 0}`;
  return (
    <div
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
    >
      {children}
    </div>
  );
}
function PB8({ children, props }) {
  return (
    <div className="pb-8" {...props}>
      {children}
    </div>
  );
}

function M({ children, pb, props, tailwindClasses }) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = `pb-${pb ?? 0}`;
  return (
    <div
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
    >
      {children}
    </div>
  );
}

function MB8({ children, props, tailwindClasses }) {
  return (
    <M pb={8} tailwindClasses={tailwindClasses} props={props}>
      {children}
    </M>
  );
}
const emptyObject = () => ({});

export {
  log,
  reverseString,
  resolveMonth,
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  Emoji,
  H3,
  H2,
  treefyPosts,
  TLDR,
  P,
  PB8,
  M,
  MB8,
  emptyObject,
};
