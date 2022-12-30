import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "helpers/oauth";
import useUserData from "hooks/api/services/useUserData";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { putOAuth } from "services/user-services";
import { UserStates } from "types/user-types";

const UserContext = createContext({} as UserStates);

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token]);

  const { userData, userDataLoading, userDataError, fetchUserData } =
    useUserData({ immediate: true });

  const getTokenWithGoogleOAuth = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);

    const { displayName: name, email, photoURL: photoUrl } = response.user;

    if (name && email && photoUrl) {
      const userToken = (await putOAuth({ name, email, photoUrl })).data.token;
      localStorage.setItem("userToken", userToken);
      setToken(userToken);
    }

    return;
  };

  const states = {
    token,
    userData,
    userDataLoading,
    userDataError,
    fetchUserData,
    getTokenWithGoogleOAuth,
  };
  return (
    <UserContext.Provider value={states as UserStates}>
      {children}
    </UserContext.Provider>
  );
}
