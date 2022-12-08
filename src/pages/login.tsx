import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// import { Login } from '@/features/auth';

const Login = dynamic(() => import('@/features/auth').then((mod) => mod.Login), {
  ssr: false,
});

const login: NextPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default login;
