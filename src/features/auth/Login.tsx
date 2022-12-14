import { Button, Container, createStyles, Flex } from '@mantine/core';
import { useGoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';

const useStyles = createStyles(() => ({
  wrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Login: FC = () => {
  const { classes } = useStyles();
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      login(tokenResponse);
    },
  });

  return (
    <div className={classes.wrapper}>
      <Button size="lg" onClick={() => googleLogin()}>
        Login
      </Button>
    </div>
  );
};

export default Login;
