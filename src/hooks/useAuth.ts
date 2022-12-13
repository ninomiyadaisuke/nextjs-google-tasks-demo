import { TokenResponse } from '@react-oauth/google';
import axios, { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useRouter } from 'next/router';

import { authAtom } from '@/contexts/authContext';
import { User } from '@/types/user';

export const useAuth = () => {
  const [user, setUser] = useAtom(authAtom);

  const router = useRouter();

  const authenticatedUserChecked = async () => {
    if (!user) {
      await router.push('/login');
    }
  };

  const login = async (res: TokenResponse) => {
    const userInfo: AxiosResponse<User, any> = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${res.access_token}` },
    });
    userInfo.data.accessToken = res.access_token;
    setUser(userInfo.data);
    router.push('/');
  };

  const logout = () => {
    setUser(RESET);
  };
  return { login, logout, user, authenticatedUserChecked, accessToken: user?.accessToken };
};

// import { CredentialResponse } from '@react-oauth/google';
// import jwtDecode from 'jwt-decode';
// import { GoogleResponse } from '@/types/user';

// const userData = jwtDecode<GoogleResponse>(res.credential as string);
