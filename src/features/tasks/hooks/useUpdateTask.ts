import { useOptimisticMutation } from '@/hooks/useApi';
import { Task } from '@/types/tasks';

import { tasksRepository } from '../tasksRepository';

export const useUpdateTask = (taskListId: string) => {
  return useOptimisticMutation<Task, Task, Task[]>(
    ['tasks', { taskListId }],
    async (params, token) => {
      return tasksRepository.updateTask({ ...params, taskListId }, token);
    },
    (oldData, params) => {
      return [
        ...oldData.map((task) => {
          if (task.id === params.id) {
            return { ...task, ...params };
          } else {
            return task;
          }
        }),
      ];
    },
  );
};
