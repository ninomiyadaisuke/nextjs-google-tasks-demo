import { CredentialResponse } from '@react-oauth/google';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { authAtom } from '@/contexts/authContext';
import { GoogleResponse } from '@/types/user';

export const useAuth = () => {
  const [user, setUser] = useAtom(authAtom);
  const router = useRouter();

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  const authenticatedUserChecked = async () => {
    if (!user) {
      await router.push('/login');
    }
  };

  const login = (res: CredentialResponse) => {
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

  const logout = () => {
    setUser(RESET);
  };

  return { router, user, showChild, authenticatedUserChecked, login, logout };
};
