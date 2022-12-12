import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useNextQueryParam(key: string) {
  const router = useRouter();

  const value = useMemo(() => {
    const res = router.asPath.match(new RegExp(`[&?]${key}=(.*)(&|$)`)) || [];
    return res[1];
  }, [router.asPath]);

  return value;
}

export const useNextQueryParams = (): { [key: string]: string } => {
  const router = useRouter();
  const value = useMemo(() => {
    // @see https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    const queryParamsStr = router.asPath.split('?').slice(1).join('');

    const urlSearchParams = new URLSearchParams(queryParamsStr);
    // the first key might be in the shape "/assets?foobar", we must change to "foobar"
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  }, [router.asPath]);

  return value;
};
