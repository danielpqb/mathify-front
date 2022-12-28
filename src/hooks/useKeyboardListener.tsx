import { filterInput } from "functions/filter-functions";
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
