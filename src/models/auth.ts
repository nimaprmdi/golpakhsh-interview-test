interface IAuthState {
  isLoggedIn: boolean;
  loading: boolean;
  lastFetch: number;
  username: string;
}

interface IAuth {
  username: string;
  password: string;
}

export type { IAuthState, IAuth };
