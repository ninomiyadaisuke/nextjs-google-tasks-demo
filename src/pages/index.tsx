import type { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { useAuth } from '@/hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();

  return (
    <Layout>
      <p>Top page</p>
      <button onClick={() => logout()}>ログアウト</button>
    </Layout>
  );
};

export default Home;
