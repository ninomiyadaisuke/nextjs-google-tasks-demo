import { Button, Grid, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCallback } from 'react';
import { SquarePlus } from 'tabler-icons-react';
import invariant from 'tiny-invariant';
import * as yup from 'yup';

import { Form, Input } from '@/components/forms';
import { useAddTask } from '@/features/tasks/hooks/useAddTask';
import { useDeleteTask } from '@/features/tasks/hooks/useDeleteTask';
import { useFetchTask } from '@/features/tasks/hooks/useFetchTask';
import { useFetchTaskList } from '@/features/tasks/hooks/useFetchTaskList';
import { usePrefetchTask } from '@/features/tasks/hooks/usePrefetchTask';
import { useUpdateTask } from '@/features/tasks/hooks/useUpdateTask';

const initialState = {
  todo: '',
};

type FormValue = typeof initialState;

const schema = yup.object({
  todo: yup.string().required('必須項目です'),
});

type Schema = typeof schema;

const TaskList: FC = () => {
  const { query } = useRouter();
  const { taskListId } = query;

  const sendTodo = (values: FormValue) => {};

  return (
    <Stack>
      <Stack></Stack>
      <Form<FormValue, Schema> schema={schema} onSubmit={sendTodo}>
        {({ register }) => (
          <Grid grow gutter={'sm'}>
            <Grid.Col span={9}>
              <Input registration={register('todo')} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Button type="submit" fullWidth leftIcon={<SquarePlus />}>
                Add task
              </Button>
            </Grid.Col>
          </Grid>
        )}
      </Form>
    </Stack>
  );
};

export default TaskList;
