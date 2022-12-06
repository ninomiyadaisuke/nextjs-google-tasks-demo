import type { NextPage } from 'next';

import AuthGuard from '@/components/utils/AuthGuard';
import { useAuth } from '@/hooks/useAuth';

const Home: NextPage = () => {
  const { logout } = useAuth();

  return (
    <AuthGuard>
      <>
        <p>Top page</p>
        <button onClick={() => logout()}>ログアウト</button>
      </>
    </AuthGuard>
  );
};

export default Home;
