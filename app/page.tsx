'use client';
import PageLoading from '@/app/_common/components/UI/PageLoading';
import { ROUTES } from '@/app/_common/constants/routes';
import { useAuth } from '@/app/_common/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { replace: routerReplace } = router;
  const { user } = useAuth();
  const isLoggedIn = !!user?.id;

  useEffect(() => {
    routerReplace(isLoggedIn ? ROUTES.home : ROUTES.auth);
  }, [isLoggedIn, routerReplace]);

  return <PageLoading />;
}
