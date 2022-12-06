import { Container, Header, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

import { AuthGuard } from '../utils';

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
