import { filterInput } from "functions/regex-functions";
import { useEffect } from "react";

export function useKeyboardListener() {
  useEffect(() => {
    window.addEventListener("keydown", handler);
  }, []);

  function handler(e: KeyboardEvent) {
    const resp = filterInput({ value: e.key, type: "only-numbers", size: 1 });

    if (resp) {
      return;
    }

    return;
  }
}
