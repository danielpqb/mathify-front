import promiseRetry from "promise-retry";
import getUserDataByToken from "./services/api-services";
import { Error, Response } from "./helpers/request";
import { UserData } from "./global-types";
import { useAlertOnRequestError } from "./components/common/Alert/hooks/useAlertOnRequestError";

export function requestUserData(
  localToken: string,
  setUserData: React.Dispatch<React.SetStateAction<Partial<UserData>>>
) {
  promiseRetry((retry, number) => {
    return getUserDataByToken(localToken).catch(retry);
  }).then((res: Response) => {
    delete res.data.message;
    setUserData(res.data);
  }),
  (error: Error) => {
    useAlertOnRequestError(error);
  };
}
