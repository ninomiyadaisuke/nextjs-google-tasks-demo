import { tasksRepository } from '@/features/tasks/tasksRepository';
import { useGenericMutation, useOptimisticMutation } from '@/hooks/useApi';
import type { Task } from '@/types/tasks';

export const useAddTask = (taskListId: string) => {
  return useOptimisticMutation<Task, Task, Task[]>(
    ['tasks', { taskListId }],
    async (params, token) => tasksRepository.createTask({ ...params, taskListId }, token),
    (oldData, newData) => [newData, ...oldData],
  );
};

export const useGenericAddTask = (taskListId: string) =>
  useGenericMutation<Pick<Task, 'title'>, Task, Task[]>(async (params, token) =>
    tasksRepository.createTask({ ...params, taskListId }, token),
  );
