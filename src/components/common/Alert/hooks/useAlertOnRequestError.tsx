import { useAppContext } from "../../../../contexts/AppContext";
import { Error } from "../../../../helpers/request";

export async function useAlertOnRequestError(error: Error) {
  const { setAlert } = useAppContext();

  const statusCode = (error as Error)?.response?.status;
  const data = (error as Error)?.response?.data as { message: string };

  const message = `Error ${statusCode}\n\n
                    ${data?.message}`;

  setAlert({
    show: true,
    message: message,
    flag: "red",
  });

  return error as Error;
}
