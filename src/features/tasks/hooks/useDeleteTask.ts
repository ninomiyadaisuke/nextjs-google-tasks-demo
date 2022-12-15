import { useOptimisticMutation } from '@/hooks/useApi';
import { Task } from '@/types/tasks';

import { tasksRepository } from '../tasksRepository';

export const useDeleteTask = (taskListId: string) => {
  return useOptimisticMutation<Pick<Task, 'id'>, void, Task[]>(
    ['tasks', { taskListId }],
    async ({ id }, token) => {
      return tasksRepository.deleteTask({ taskListId, taskId: id }, token);
    },
    (oldData, params) => [...oldData.filter(({ id }) => id !== params.id)],
  );
};
