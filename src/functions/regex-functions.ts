export function filterInput({
  value,
  type,
  size,
}: {
  value: string;
  type: "only-numbers";
  size: number;
}) {
  let resp = String(value);

  switch (type) {
  case "only-numbers":
    resp = resp.replaceAll(/\D/g, "");
    break;

  default:
    break;
  }

  const sizeRegex = new RegExp(`^.{0,${size}}`, "g");
  resp = (resp.match(sizeRegex) as RegExpMatchArray)[0];

  return resp;
}
