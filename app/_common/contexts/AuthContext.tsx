'use client';

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { setSession } from '../utils/jwt';

import { mockUsers } from '@/app/_common/constants/mockUsers';
import { ROUTES } from '@/app/_common/constants/routes';
import { User, UserRoleEnum } from '@/app/_common/types/User';
import { convertToBase64, decodeBase64 } from '@/app/_common/utils/base64';
import { useRouter } from 'next/navigation';

export type AuthContextState = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  initializing: boolean;
};

const AuthContext = createContext<AuthContextState>({
  user: null,
  login: () => undefined,
  logout: () => undefined,
  initializing: true,
});

export const AuthContextProvider: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<AuthContextState['user'] | null>(null);
  const [initializing, setInitializing] = useState(true);

  const router = useRouter();

  const loginHandler = async (email: string, password: string) => {
    const foundUser = mockUsers.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password &&
        item.role === UserRoleEnum.HR
    );

    if (!foundUser) {
      throw new Error(
        'Failed to log you in, try again or contact administrator'
      );
    }

    // For just mocking purpose and to implement autologin
    const accessToken = convertToBase64(foundUser);

    setSession(accessToken);

    setUser(foundUser);
  };

  const logoutHandler = () => {
    setSession(null);
    setUser(null);

    router.replace(ROUTES.auth);
  };

  useEffect(() => {
    try {
      setInitializing(true);
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        throw new Error();
      }

      const user = decodeBase64<User>(accessToken);

      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setInitializing(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: loginHandler,
        logout: logoutHandler,
        initializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
