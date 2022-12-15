import { Container, Loader } from '@mantine/core';
import type { NextPage } from 'next';
import { Suspense } from 'react';

import { Layout } from '@/components/layouts';
import { TaskList } from '@/features/tasks/components';

type Props = {
  taskListId: string;
};

const Tasks: NextPage<Props> = ({ taskListId }) => {
  return (
    <Layout>
      <Suspense
        fallback={
          <Container p={16}>
            <Loader />
          </Container>
        }
      >
        <TaskList taskListId={taskListId} />
      </Suspense>
    </Layout>
  );
};

export default Tasks;

export const getServerSideProps = async (ctx: { params: string }) => {
  const data = ctx.params;
  return {
    props: data,
  };
};
