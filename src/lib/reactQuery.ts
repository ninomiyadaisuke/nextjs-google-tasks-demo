import { showNotification } from '@mantine/notifications';
import { QueryClient } from '@tanstack/react-query';

const queryErrorHandler = (error: unknown): void => {
  const id = 'react-query-error';
  const title = error instanceof Error ? error.message : 'error connecting to server';

  showNotification({
    title: id,
    message: title,
    autoClose: 3000,
    color: 'red',
  });
};

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        retry: false,
        staleTime: 300000,
        cacheTime: 300000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        suspense: true, // suspense mode
        useErrorBoundary: false, // unused error boundary
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();
