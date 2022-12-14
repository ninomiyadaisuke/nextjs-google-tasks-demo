import { Container, Loader } from '@mantine/core';
import type { NextPage } from 'next';
import { Suspense } from 'react';

import { Layout } from '@/components/layouts';
import { Top } from '@/features/tasks/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Top />
    </Layout>
  );
};

export default Home;
