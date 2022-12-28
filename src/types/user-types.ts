export type UserStates = {
  userData: UserData | null;
  userDataLoading: boolean | null;
  userDataError: Error | null;
  fetchUserData: () => Promise<any>;
  getTokenWithGoogleOAuth: () => Promise<void>;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
  createdAt: string;
};

export type OAuthData = {
  name: string;
  email: string;
  photoUrl: string;
};
