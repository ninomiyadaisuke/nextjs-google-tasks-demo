import { Button, Group } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { useFetchTaskLists } from '@/features/tasks/hooks/useFetchTaskLists';

const ButtonList: FC = () => {
  const { data: taskLists } = useFetchTaskLists();
  const { query, push } = useRouter();
  const { taskListId } = query;

  return (
    <Group>
      {!!taskLists &&
        taskLists.map((taskList) => {
          return (
            <Button
              key={taskList.id}
              onClick={() => push(`/lists/${taskList.id}/tasks`)}
              variant={taskList.id === taskListId ? 'filled' : 'light'}
            >
              {taskList.title}
            </Button>
          );
        })}
    </Group>
  );
};

export default ButtonList;
