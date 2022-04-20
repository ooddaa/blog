import { Center, createStyles } from "@mantine/core";

export default function Tag({ tag, classNames }) {
  const useStyles = createStyles(() => ({}));
  const { cx } = useStyles();
  return (
    <Center
      className={cx(
        classNames ??
          "p-2 pl-3 pr-3 m-1 bg-yellow-500 border h-auto w-max rounded-full text-sm"
      )}
    >
      {tag}
    </Center>
  );
}
