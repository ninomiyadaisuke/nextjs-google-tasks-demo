import { useApi, useGenericMutation } from '@/hooks/useApi';
import { Task } from '@/types/tasks';

import { tasksRepository } from '../tasksRepository';

export const useGenericAddTask = (taskListId: string) => {
  return useGenericMutation<Pick<Task, 'title'>, Task, Task[]>(async (params, token) => {
    return tasksRepository.createTask({ ...params, taskListId }, token);
  });
};
