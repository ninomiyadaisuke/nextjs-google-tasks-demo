import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

const Login: FC = () => {
  // const { user, login, logout, accessToken } = useAuth();
  // const login = useGoogleLogin({
  //   flow: 'auth-code',
  //   onSuccess: async (codeResponse) => {
  //     // console.log(codeResponse);
  //     console.log(codeResponse);

  //     const tokens = await axios.post('http://localhost:3000/auth', {
  //       code: codeResponse.code,
  //     });
  //     console.log('===>', tokens);
  //   },
  // });

  return (
    <>
      {/* <button onClick={() => login()}>login</button> */}
      {/* {!user ? (
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
      )} */}
    </>
  );
};

export default Login;
