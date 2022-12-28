import { getUserDataByToken } from "services/user-services";
import useAsync from "../useAsync";
import useToken from "../useToken";

export default function useUserData(config?: { immediate?: boolean; retry?: boolean }) {
  const token = useToken();
  const configs = { ...config };

  if (!token) {
    configs.immediate = false;
  }

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
    act: fetchUserData,
  } = useAsync(() => getUserDataByToken(token), configs?.immediate, configs?.retry);

  return {
    userData,
    userDataLoading,
    userDataError,
    fetchUserData,
  };
}
