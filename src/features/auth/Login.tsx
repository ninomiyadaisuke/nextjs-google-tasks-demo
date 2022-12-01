import { GoogleLogin } from '@react-oauth/google';
import { FC, useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login: FC = () => {
  const { user, login, logout } = useAuth();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

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
