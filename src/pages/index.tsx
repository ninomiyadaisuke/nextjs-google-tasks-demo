import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';

import { Layout } from '@/components/layouts';
import { useFetchTaskLists } from '@/features/tasks/hooks/useFetchTaskLists';

const Home: NextPage = () => {
  const { data: taskLists, isLoading } = useFetchTaskLists();

  return (
    <Layout>
      <p>Top page</p>
      <button onClick={() => signOut()}>signout</button>
    </Layout>
  );
};

export default Home;

// import { useAuth } from '@/hooks/useAuth';
// const { logout } = useAuth();
