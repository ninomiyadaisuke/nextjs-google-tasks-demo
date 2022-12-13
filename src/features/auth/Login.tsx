import { useGoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login: FC = () => {
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      login(tokenResponse);
    },
  });

  return (
    <>
      <button onClick={() => googleLogin()}>login</button>
    </>
  );
};

export default Login;
