import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { AppProvider } from '@/providers/app';

function MyApp({ Component, pageProps }: AppProps) {
  // const [ready, setReady] = useState(false);
  // const router = useRouter();
  // useEffect(() => {
  //   if (router.isReady) {
  //     setReady(true);
  //   }
  // }, [router.isReady]);

  return (
    <AppProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppProvider>
  );
}

export default MyApp;
