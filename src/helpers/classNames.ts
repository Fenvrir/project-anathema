type Mode = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mode: Mode = {},
  additional: string[] = []
) {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([_className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
