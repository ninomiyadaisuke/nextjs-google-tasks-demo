import { GoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login: FC = () => {
  const { user, showChild, login, logout } = useAuth();

  if (!showChild) {
    return null;
  }

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
