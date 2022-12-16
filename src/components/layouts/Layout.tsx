import { Button, Container, Flex, Header, Loader, Title } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FC, ReactNode, Suspense } from 'react';

import { ButtonList } from '@/components/elements';
import { useAuth } from '@/hooks/useAuth';

const AuthGuard = dynamic(() => import('@/components/utils').then((mod) => mod.AuthGuard), {
  ssr: false,
});

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  const { logout } = useAuth();
  return (
    <AuthGuard>
      <Header height={60}>
        <Container>
          <Flex align="center" justify={'space-between'}>
            <Title>Google Tasks</Title>
            <Button onClick={logout}>LOGOUT</Button>
          </Flex>
        </Container>
      </Header>
      <Container p={16}>
        <Suspense
          fallback={
            <Container p={16}>
              <Loader />
            </Container>
          }
        >
          <ButtonList />
        </Suspense>
      </Container>
      {children}
    </AuthGuard>
  );
};

export default Layout;
