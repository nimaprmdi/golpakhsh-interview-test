interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  lastFetch: number;
  username: string;
}

interface Auth {
  username: string;
  password: string;
}

export type { AuthState, Auth };
