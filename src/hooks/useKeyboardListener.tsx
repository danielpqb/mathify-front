import { filterInput } from "functions/regex-functions";
import { useEffect } from "react";

export function useKeyboardListener() {
  useEffect(() => {
    window.addEventListener("keydown", handler);
  }, []);

  function handler(e: KeyboardEvent) {
    const resp = filterInput({ value: e.key, type: "only-numbers", size: 1 });

    if (resp) {
      document.getElementById(`keyboard-key-${resp}`)?.click();
      return;
    }

    if (e.key === "Enter") {
      document.getElementById("keyboard-key-enter")?.click();
      return;
    }

    if (e.key === "Backspace") {
      document.getElementById("keyboard-key-backspace")?.click();
      return;
    }

    return;
  }
}
