import { usePrefetch } from '@/hooks/useApi';

import { tasksRepository } from '../tasksRepository';

export const usePrefetchTask = (taskListId: string, taskId: string) => {
  return usePrefetch(['task', { taskListId, taskId }], async (params, token) => tasksRepository.getTask(params, token));
};
