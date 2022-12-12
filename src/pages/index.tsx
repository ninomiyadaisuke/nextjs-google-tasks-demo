import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Layout } from '@/components/layouts';
import { useFetchTaskLists } from '@/features/tasks/hooks/useFetchTaskLists';
import { useAuth } from '@/hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();
  const { data: session, status } = useSession();

  const { data: taskLists, isLoading } = useFetchTaskLists();

  return (
    <Layout>
      <p>Top page</p>
      <button onClick={() => logout()}>ログアウト</button>
      <button onClick={() => signIn()}>signin</button>
      <button onClick={() => signOut()}>signout</button>
    </Layout>
  );
};

export default Home;
