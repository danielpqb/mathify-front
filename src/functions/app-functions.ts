import { ConfigData, GameData } from "components/pages/Game/types";
import { defaultGameConfig } from "../constants/game-constants";

export function renderNewGame({
  setGameData,
  configData,
}: {
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameData>>>;
  configData?: ConfigData;
}) {
  let config = configData ? configData : { ...defaultGameConfig, questionTime: defaultGameConfig.questionTime * 1000 };

  const answers = (n: number) => {
    const answers = [];
    for (let i = 1; i <= n; i++) {
      answers.push({ id: i });
    }

    return answers;
  };

  setGameData((old) => {
    config = old.config ? old.config : config;

    const newer = {
      ...old,
      screen: "question",
      config: config,
      answers: answers(config.numberOfQuestions as number),
    };
    return newer as GameData;
  });
}
