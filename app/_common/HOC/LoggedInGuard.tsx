import PageLoading from '@/app/_common/components/UI/PageLoading';
import { ROUTES } from '@/app/_common/constants/routes';
import { useAuth } from '@/app/_common/contexts/AuthContext';
import { UserRoleEnum } from '@/app/_common/types/User';
import { setSession } from '@/app/_common/utils/jwt';
import { usePathname, useRouter } from 'next/navigation';

import { ComponentType, useEffect, useState } from 'react';

const loggedInGuard = <T,>(Component: ComponentType<T>) => {
  const AuthenticatedComponent = (props: T & Record<string, unknown>) => {
    const router = useRouter();
    const { replace: routerReplace } = router;
    const pathname = usePathname();

    const [checking, setChecking] = useState(true);
    const { user, initializing } = useAuth();
    const role = user?.role || null;

    useEffect(() => {
      if (initializing) {
        return;
      }

      const runGuard = async () => {
        try {
          const accessToken = localStorage.getItem('accessToken');

          if (!accessToken) {
            throw new Error();
          }

          if (!role) {
            throw new Error();
          }

          if (role !== UserRoleEnum.HR) {
            throw new Error();
          }
        } catch (error) {
          setSession(null);
          routerReplace(ROUTES.auth);
        } finally {
          setChecking(false);
        }
      };

      runGuard();
    }, [routerReplace, role, initializing]);

    if (checking || initializing) {
      return <PageLoading />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default loggedInGuard;
