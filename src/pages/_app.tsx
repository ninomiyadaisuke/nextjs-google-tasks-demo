import type { AppProps } from 'next/app';

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
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
