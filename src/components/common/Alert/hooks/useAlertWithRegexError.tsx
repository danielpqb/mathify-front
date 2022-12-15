import { useAppContext } from "../../../../contexts/AppContext";

export async function useAlertWithRegexError(
  text: string,
  regexError: {
    pattern: RegExp;
    message: string;
  }
) {
  const { setAlert } = useAppContext();

  if (text.match(regexError.pattern)) return;

  setAlert({
    show: true,
    message: regexError.message,
    flag: "red",
  });

  return;
}
