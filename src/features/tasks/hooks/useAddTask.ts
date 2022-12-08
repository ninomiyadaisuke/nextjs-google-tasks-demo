import { tasksRepository } from '@/features/tasks/tasksRepository';
import { useOptimisticMutation } from '@/hooks/useApi';
import type { Task } from '@/types/tasks';

export const useAddTask = (taskListId: string) => {
  useOptimisticMutation<Task, Task, Task[]>(
    ['tasks', { taskListId }],
    async (params, token) => tasksRepository.createTask({ ...params, taskListId }, token),
    (oldData, newData) => [newData, ...oldData],
  );
};
