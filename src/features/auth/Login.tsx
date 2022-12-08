import { GoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login: FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            login(credentialResponse);
          }}
          onError={() => {
            alert('Login Failed');
          }}
          useOneTap
        />
      ) : (
        <>
          <button onClick={logout}>ログアウト</button>
        </>
      )}
    </>
  );
};

export default Login;
