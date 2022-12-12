import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;
  const accessToken = session?.user.accessToken;
  const authenticatedUserChecked = async () => {
    if (!session) {
      await router.push('/api/auth/signin');
    }
  };
  return { router, user, accessToken, authenticatedUserChecked, signOut };
};

// import { CredentialResponse } from '@react-oauth/google';
// import { useAtom } from 'jotai';
// import { RESET } from 'jotai/utils';
// import jwtDecode from 'jwt-decode';
// import { authAtom } from '@/contexts/authContext';
// import { GoogleResponse } from '@/types/user';
// const [user, setUser] = useAtom(authAtom);
// const login = (res: CredentialResponse) => {
//   const userData = jwtDecode<GoogleResponse>(res.credential as string);
//   setUser({
//     email: userData.email,
//     email_verified: userData.email_verified,
//     family_name: userData.family_name,
//     given_name: userData.given_name,
//     name: userData.name,
//     picture: userData.picture,
//     token: res.credential,
//   });
//   router.push('/');
// };
// const logout = () => {
//   setUser(RESET);
// };
