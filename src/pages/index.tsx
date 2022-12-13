import type { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { useFetchTaskLists } from '@/features/tasks/hooks/useFetchTaskLists';
import { useAuth } from '@/hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();
  const { data: taskLists } = useFetchTaskLists();
  return (
    <Layout>
      <p>Top page</p>
      <button onClick={() => logout()}>signout</button>
    </Layout>
  );
};

export default Home;
