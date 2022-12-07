import type { NextPage } from 'next';

import { Input } from '@/components/forms';
import { Layout } from '@/components/layouts';
import { useAuth } from '@/hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();

  return (
    <Layout>
      <p>Top page</p>
      <Input />
      <button onClick={() => logout()}>ログアウト</button>
    </Layout>
  );
};

export default Home;
