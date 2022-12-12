import { useApi } from '@/hooks/useApi';

import { tasksRepository } from '../tasksRepository';

export const useFetchTaskList = (taskListId: string) => {
  useApi(
    ['tasks', { taskListId }],
    // eslint-disable-next-line @typescript-eslint/no-shadow
    async ({ taskListId }, token) => {
      return tasksRepository.getTasks({ taskListId }, token);
    },
    {
      enabled: !!taskListId,
    },
  );
};
