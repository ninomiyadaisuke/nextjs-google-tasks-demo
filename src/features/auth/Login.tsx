import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { authAtom } from '@/contexts/authContext';
import { GoogleResponse } from '@/types/user';

const Login: FC = () => {
  const [user, setUser] = useAtom(authAtom);
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const onSuccess = (res: CredentialResponse) => {
    const userData = jwtDecode<GoogleResponse>(res.credential as string);
    setUser({
      email: userData.email,
      email_verified: userData.email_verified,
      family_name: userData.family_name,
      given_name: userData.given_name,
      name: userData.name,
      picture: userData.picture,
    });
    router.push('/');
  };

  return (
    <>
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            onSuccess(credentialResponse);
          }}
          onError={() => {
            alert('Login Failed');
          }}
        />
      ) : (
        <>
          <button onClick={() => setUser(RESET)}>ログアウト</button>
        </>
      )}
    </>
  );
};

export default Login;
