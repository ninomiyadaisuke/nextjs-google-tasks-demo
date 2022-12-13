import { useMutation, UseMutationOptions, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/hooks/useAuth';

export const useApi = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData,
>(
    queryKey: TQueryKey,
    fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
  ) => {
  const { accessToken } = useAuth();
  return useQuery({ queryKey, queryFn: async () => fetcher(queryKey[1], accessToken || ''), ...options });
};

export const useOptimisticMutation = <TVariables, TData, TContext>(
  queryKey: [string, Record<string, unknown>?],
  fetcher: (params: TVariables, token: string) => Promise<TData | void>,
  updater?: ((oldData: TContext, newData: TVariables) => TContext) | undefined,
  options?: Omit<UseMutationOptions<TData | void, unknown, TVariables, TContext>, 'onMutate' | 'onError' | 'onSettled'>,
) => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation(
    async (params) => {
      return fetcher(params, accessToken || '');
    },
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries(queryKey);

        const previousData = queryClient.getQueryData<TContext>(queryKey);

        if (previousData && updater) {
          queryClient.setQueryData<TContext>(queryKey, () => {
            return updater(previousData, data);
          });
          // updaterなしの場合を検討
          // queryClient.setQueryData(queryKey, data);
        }

        return previousData;
      },
      onError: (err, _, context) => {
        queryClient.setQueryData(queryKey, context);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      ...options,
    },
  );
};

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

export const usePrefetch = <
  TQueryKey extends [string, Record<string, unknown>?],
  TQueryFnData,
  TError = unknown,
  TData = TQueryFnData,
>(
    queryKey: TQueryKey,
    fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
  ) => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();

  return () => {
    if (!queryKey[0]) {
      return;
    }

    queryClient.prefetchQuery({
      queryKey,
      queryFn: async () => fetcher(queryKey[1], accessToken || ''),
      ...options,
    });
  };
};
