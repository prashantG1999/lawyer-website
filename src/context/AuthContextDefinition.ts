import { createContext } from 'react';
import { type User } from 'firebase/auth';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
