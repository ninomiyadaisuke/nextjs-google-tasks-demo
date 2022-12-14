import { FC } from 'react';

import { useFetchTaskLists } from '@/features/tasks/hooks/useFetchTaskLists';
import { useAuth } from '@/hooks/useAuth';

const Top: FC = () => {
  const { logout, accessToken } = useAuth();
  const { data: taskLists } = useFetchTaskLists();

  return (
    <div>
      <p>Top page</p>
      <button onClick={() => logout()}>signout</button>
    </div>
  );
};

export default Top;
