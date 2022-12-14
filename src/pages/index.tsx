import { Loader } from '@mantine/core';
import type { NextPage } from 'next';
import { Suspense } from 'react';

import { Layout } from '@/components/layouts';
import { Top } from '@/features/tasks/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Top />
      </Suspense>
    </Layout>
  );
};

export default Home;
