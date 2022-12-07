import { TextInput } from '@mantine/core';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  registration: UseFormRegisterReturn;
};

const Input: FC<Props> = (props) => {
  const { registration } = props;
  return <TextInput {...registration} placeholder="タスクを登録" />;
};

export default Input;
