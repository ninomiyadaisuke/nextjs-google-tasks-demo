import { useSession } from 'next-auth/react';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: ReactNode;
};

const AuthGuard: FC<Props> = ({ children }) => {
  const { user, authenticatedUserChecked } = useAuth();
  const { data: session } = useSession();

  authenticatedUserChecked();

  return <>{session && <>{children}</>}</>;
};

export default AuthGuard;
