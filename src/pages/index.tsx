import { useAtom, useAtomValue } from 'jotai';
import { RESET } from 'jotai/utils';
import type { NextPage } from 'next';

import { authAtom } from '@/contexts/authContext';
import { GoogleResponse } from '@/types/user';

const Home: NextPage = () => {
  const [user, setUser] = useAtom(authAtom);

  return <div>{user && <button onClick={() => setUser(RESET)}>ログアウト</button>}</div>;
};

export default Home;
