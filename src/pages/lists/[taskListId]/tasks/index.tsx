import type { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { TaskList } from '@/features/tasks/components';
import { useAuth } from '@/hooks/useAuth';

const Tasks: NextPage = () => {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
};

export default Tasks;
