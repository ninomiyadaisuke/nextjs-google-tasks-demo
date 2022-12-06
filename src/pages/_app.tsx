import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { AppProvider } from '@/providers/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
