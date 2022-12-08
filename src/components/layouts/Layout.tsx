import { Container, Header, Title } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';

const AuthGuard = dynamic(() => import('@/components/utils').then((mod) => mod.AuthGuard), {
  ssr: false,
});

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <AuthGuard>
      <Header height={60}>
        <Container>
          <Title>Google Tasks</Title>
        </Container>
      </Header>
      {children}
    </AuthGuard>
  );
};

export default Layout;
