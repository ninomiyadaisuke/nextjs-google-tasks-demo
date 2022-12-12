import { useApi } from '@/hooks/useApi';

import { tasksRepository } from '../tasksRepository';

export const useFetchTask = (taskListId: string, taskId: string) => {
  return useApi(
    ['task', { taskListId, taskId }],
    async (params, token) => {
      return tasksRepository.getTask(params, token);
    },
    {
      enabled: !!taskId && !!taskListId,
    },
  );
};
