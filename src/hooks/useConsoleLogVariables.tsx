import { useUserContext } from "contexts/UserContext";
import { useMemo } from "react";
import { UserData } from "types/user-types";

export function useConsoleLogVariables() {
  const { userData } = useUserContext();

  return useMemo(() => {
    const headerColor = "color: #ffbe88; font-weight: bold;";
    const paramColor = "\x1B[38;2;126;204;152m"; //rgb(126, 204, 152)"
    const dependencyColor = "\x1B[38;2;255;154;136m"; //rgb(255, 154, 136)"
    const stringColor = "\x1B[38;2;54;206;193m"; //rgb(54, 206, 193)"
    const resetColor = "\x1B[m";

    const separateParams = (obj: object) => {
      if (obj) {
        Object.entries(obj).forEach((keyValuePair) => {
          if (typeof keyValuePair[1] === "string") {
            console.log(`  ${paramColor}${keyValuePair[0]}: ${stringColor}'${keyValuePair[1]}'`);
            return;
          }
          console.log(`  ${paramColor}${keyValuePair[0]}:`, keyValuePair[1]);
        });
      }
      console.log("\n ");
    };

    console.clear();
    console.log(`%c\nuserData ${dependencyColor}(dependency)${resetColor}`, headerColor);
    separateParams(userData as UserData);
  }, [userData]);
}
