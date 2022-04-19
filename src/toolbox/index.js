import { Text } from "@mantine/core";
import { Prism } from "@mantine/prism";

function reverseString(str /* : string */) /* :string */ {
  return str.split("").reverse().join("");
}

function resolveMonth(num /* : number */) /* :string */ {
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

function JS({ children, ...props }) {
  return (
    <Prism language="javascript" {...props}>
      {children}
    </Prism>
  );
}

function Emoji({ children, props, style }) {
  return (
    <div
      className="emoji"
      style={
        style
          ? { display: "inline-block", ...style }
          : { display: "inline-block", paddingRight: "1rem" }
      }
    >
      {children}
    </div>
  );
}

export {
  reverseString,
  resolveMonth,
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  Emoji,
};
