import { filterInput } from "functions/regex-functions";
import { useEffect, useMemo } from "react";
import { useAppContext } from "./contexts/AppContext";

export function useConsoleLogVariables() {
  const { userData, gameData, setQuestionData, setReloadApp, configData } =
    useAppContext();

  useMemo(() => {
    const headerColor = "color: #ffbe88; font-weight: bold;";
    const paramColor = "\x1B[38;2;126;204;152m"; //rgb(126, 204, 152)"
    const dependencyColor = "\x1B[38;2;255;154;136m"; //rgb(255, 154, 136)"
    const stringColor = "\x1B[38;2;54;206;193m"; //rgb(54, 206, 193)"
    const resetColor = "\x1B[m";

    const separateParams = (obj: object) => {
      if (obj) {
        Object.entries(obj).forEach((keyValuePair) => {
          if (typeof keyValuePair[1] === "string") {
            console.log(
              `  ${paramColor}${keyValuePair[0]}: ${stringColor}'${keyValuePair[1]}'`
            );
            return;
          }
          console.log(`  ${paramColor}${keyValuePair[0]}:`, keyValuePair[1]);
        });
      }
      console.log("\n ");
    };

    console.clear();
    console.log(
      `%c\ngameData ${dependencyColor}(dependency)${resetColor}`,
      headerColor
    );
    separateParams(gameData);

    console.log(
      `%c\nuserData ${dependencyColor}(dependency)${resetColor}`,
      headerColor
    );
    separateParams(userData);

    console.log(
      `%c\nconfigData ${dependencyColor}(dependency)${resetColor}`,
      headerColor
    );
    separateParams(configData);

    setQuestionData((old) => {
      console.log("%c\nquestionData", headerColor);
      separateParams(old);
      return old;
    });

    setReloadApp((old) => {
      console.log(
        `%c\nDependencies Reloads: ${dependencyColor}${old + 1}\n `,
        headerColor
      );
      return old + 1;
    });
  }, [gameData, userData, configData, setQuestionData]);
}

export function useKeyboardListener() {
  const { setQuestionData } = useAppContext();

  useEffect(() => {
    window.addEventListener("keydown", handler);
  }, []);

  function handler(e: KeyboardEvent) {
    const resp = filterInput({ value: e.key, type: "only-numbers", size: 1 });

    if (resp) {
      setQuestionData((old) => {
        return { ...old, answer: old.answer + resp };
      });
    }

    if (e.key === "Enter") {
      document.getElementById("keyboard-key-enter")?.click();
    }

    if (e.key === "Backspace") {
      setQuestionData((old) => {
        return { ...old, answer: old.answer?.slice(0, -1) };
      });
    }

    return;
  }
}
