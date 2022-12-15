import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { useAuth } from '@/hooks/useAuth';

export const useGenericMutation = <TVariables, TData, TContext>(
  fetcher: (params: TVariables, token: string) => Promise<TData | void>,
  options?: UseMutationOptions<TData | void, unknown, TVariables, TContext>,
) => {
  const { accessToken } = useAuth();

  return useMutation(
    async (params: TVariables) => {
      return fetcher(params, accessToken || '');
    },
    { ...options },
  );
};
