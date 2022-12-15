import { Button, Grid, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCallback } from 'react';
import { SquarePlus } from 'tabler-icons-react';
import invariant from 'tiny-invariant';
import * as yup from 'yup';

import { TaskListItem } from '@/components/elements';
import { Form, Input } from '@/components/forms';
import { useAddTask, useGenericAddTask } from '@/features/tasks/hooks/useAddTask';
import { useDeleteTask } from '@/features/tasks/hooks/useDeleteTask';
import { useFetchTask } from '@/features/tasks/hooks/useFetchTask';
import { useFetchTaskList } from '@/features/tasks/hooks/useFetchTaskList';
import { usePrefetchTask } from '@/features/tasks/hooks/usePrefetchTask';
import { useUpdateTask } from '@/features/tasks/hooks/useUpdateTask';
import { idGenerator } from '@/lib/helper';
import { Task } from '@/types/tasks';

const initialState = {
  id: '',
  title: '',
};

type FormValue = typeof initialState;

const schema = yup.object({
  title: yup.string().required('必須項目です'),
});

type Schema = typeof schema;

type Props = {
  taskListId: string;
};

const TaskList: FC<Props> = (props) => {
  const { taskListId } = props;

  const { data: tasks } = useFetchTaskList(taskListId);

  const createTask = useAddTask(taskListId);

  const sendTodo = async (values: FormValue) => {
    try {
      await createTask.mutateAsync({
        id: idGenerator(),
        title: values.title,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'error connecting to server';
      showNotification({
        title: `Cannot add the task: ${values.title}`,
        message,
        autoClose: 3000,
        color: 'red',
      });
    }
  };

  const updateTask = useUpdateTask(taskListId);

  const completeHandler = useCallback(
    async (params: Task) => {
      try {
        await updateTask.mutateAsync({ ...params });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'error connecting to server';

        showNotification({
          title: `Cannot complete the task: ${params.title}`,
          message,
          autoClose: 3000,
          color: 'red',
        });
      }
    },
    [updateTask],
  );

  const deleteTask = useDeleteTask(taskListId);

  const deleteHandler = useCallback(
    async (taskId: string) => {
      try {
        await deleteTask.mutateAsync({ id: taskId });
      } catch (error) {
        const message = error instanceof Error ? error.message : 'error connecting to server';

        showNotification({
          title: `Cannot delete the task: ${taskId}`,
          message,
          autoClose: 3000,
          color: 'red',
        });
      }
    },
    [deleteTask],
  );

  return (
    <Stack>
      <Stack spacing={'sm'}>
        {!!tasks &&
          tasks.map((task) => (
            <TaskListItem
              key={task.id}
              taskListId={taskListId}
              task={task}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
              isCreating={createTask.isLoading}
              usePrefetchTask={usePrefetchTask}
            />
          ))}
      </Stack>
      <Form<FormValue, Schema> schema={schema} onSubmit={sendTodo}>
        {({ register }) => (
          <Grid grow gutter={'sm'}>
            <Grid.Col span={9}>
              <Input registration={register('title')} />
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
