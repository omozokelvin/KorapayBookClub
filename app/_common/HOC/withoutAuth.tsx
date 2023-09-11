import PageLoading from '@/app/_common/components/UI/PageLoading';
import { ROUTES } from '@/app/_common/constants/routes';
import { useAuth } from '@/app/_common/contexts/AuthContext';
import { useRouter } from 'next/navigation';

import { ComponentType, useEffect, useState } from 'react';

const withoutAuth = <T,>(Component: ComponentType<T>) => {
  const UnAuthenticatedComponent = (props: T & Record<string, unknown>) => {
    const router = useRouter();
    const { replace: routerReplace } = router;

    const [checking, setChecking] = useState(true);
    const { user } = useAuth();
    const isAuthenticated = !!user?.id;

    useEffect(() => {
      const runGuard = async () => {
        if (isAuthenticated) {
          await routerReplace(ROUTES.home);
        }

        setChecking(false);
      };

      runGuard();
    }, [isAuthenticated, routerReplace]);

    return checking ? <PageLoading /> : <Component {...props} />;
  };

  return UnAuthenticatedComponent;
};

export default withoutAuth;
