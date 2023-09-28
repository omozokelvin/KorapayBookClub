'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export enum QueryParamEnum {
  search = 'search',
}

export default function useCustomRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const getQueryParam = useCallback(
    (key: QueryParamEnum) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const setQueryParam = useCallback(
    (key: QueryParamEnum, value?: any) => {
      value || value === 0
        ? urlParams.set(key, value.toString())
        : urlParams.delete(key);

      router.push(pathname + `?${urlParams.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, urlParams]
  );

  return {
    getQueryParam,
    setQueryParam,
  };
}
