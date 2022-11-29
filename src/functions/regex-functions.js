export function filterInput({ value, type, size }) {
  let resp = value;

  switch (type) {
    case "only-numbers":
      resp = resp.replaceAll(/\D/g, "");
      break;

    default:
      break;
  }

  const sizeRegex = new RegExp(`^.{0,${size}}`, "g");
  resp = resp.match(sizeRegex)[0];

  return Number(resp);
}
