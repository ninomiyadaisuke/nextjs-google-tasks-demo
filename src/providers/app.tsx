import { NotificationsProvider } from '@mantine/notifications';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { queryClient } from '@/lib/reactQuery';

type AppProviderProps = {
  children: ReactNode;
};

const ErrorFallback = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
      <button onClick={() => router.push('/')}>Refresh</button>
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NotificationsProvider limit={5}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </NotificationsProvider>
      </ErrorBoundary>
    </GoogleOAuthProvider>
  );
};
