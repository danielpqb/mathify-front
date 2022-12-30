import { useUserContext } from "contexts/UserContext";
import { getUserDataByToken } from "services/user-services";
import useAsync from "../useAsync";

export default function useUserData(config?: {
  immediate?: boolean;
  retry?: boolean;
}) {
  const { token } = useUserContext();
  const localToken = localStorage.getItem("userToken") || "";

  const configs = { ...config };

  if (!token) {
    configs.immediate = false;
  }

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
    act: fetchUserData,
  } = useAsync(
    () => getUserDataByToken(token ? token : localToken),
    configs?.immediate,
    configs?.retry
  );

  return {
    userData: (userData as any)?.data?.user,
    userDataLoading,
    userDataError,
    fetchUserData,
  };
}
