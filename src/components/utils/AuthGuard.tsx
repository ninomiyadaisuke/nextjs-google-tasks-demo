import { FC, ReactNode } from 'react';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: ReactNode;
};

const AuthGuard: FC<Props> = ({ children }) => {
  const { user, showChild, authenticatedUserChecked } = useAuth();

  if (!showChild) {
    return null;
  }

  authenticatedUserChecked();

  return <>{user && <>{children}</>}</>;
};

export default AuthGuard;
