import { GameDataAnswer } from "components/pages/Game/types";

export function countProps({
  prop,
  withValue,
  data,
}: {
  prop: string;
  withValue?: any;
  data: GameDataAnswer[];
}) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      withValue === undefined ||
      data[i as keyof object][prop as keyof object] === withValue
    ) {
      count++;
    }
  }
  return count;
}

export function sumProps({
  prop,
  withValue,
  data,
}: {
  prop: string;
  withValue?: any;
  data: GameDataAnswer[];
}) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      withValue === undefined ||
      data[i as keyof object][prop as keyof object] === withValue
    ) {
      sum = sum + data[i as keyof object][prop as keyof object];
    }
  }
  return sum;
}
