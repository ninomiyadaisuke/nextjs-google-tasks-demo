import { api } from '@/lib/api';
import type {
  CreateTaskParams,
  DeleteTaskParams,
  GetTaskListsParams,
  GetTaskParams,
  GetTasksParams,
  Task,
  TaskList,
  TaskListsResponse,
  TasksRepository,
  TasksResponse,
  UpdateTaskParams,
} from '@/types/tasks';

export const tasksRepository: TasksRepository = {
  getTaskLists: async (params?: GetTaskListsParams, token?: string): Promise<TaskList[]> => {
    const response = await api.get('https://tasks.googleapis.com/tasks/v1/users/@me/lists', {
      params: {
        ...params,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.items;
  },

  getTasks: async (params: GetTasksParams, token: string): Promise<Task[]> => {
    const response = await api.get<TasksResponse>(
      `https://tasks.googleapis.com/tasks/v1/lists/${params.taskListId}/tasks?showCompleted=true&showHidden=true`,
      {
        params: {
          ...params,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.items;
  },

  getTask: async (params: GetTaskParams, token: string): Promise<Task> => {
    const response = await api.get<Task>(
      `https://tasks.googleapis.com/tasks/v1/lists/${params.taskListId}/tasks/${params.taskId}`,
      {
        params: {
          ...params,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  },

  createTask: async (params: CreateTaskParams, token: string): Promise<Task> => {
    // for optimistic ui sample
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await api.post<Task>(
      `https://tasks.googleapis.com/tasks/v1/lists/${params.taskListId}/tasks`,
      {
        title: params.title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
    return response.data;
  },

  updateTask: async (params: UpdateTaskParams, token: string): Promise<Task> => {
    // for optimistic ui sample
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { taskListId, id, ...rest } = params;

    const response = await api.patch<Task>(
      `https://tasks.googleapis.com/tasks/v1/lists/${taskListId}/tasks/${id}`,
      {
        ...rest,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
    return response.data;
  },

  deleteTask: async (params: DeleteTaskParams, token: string): Promise<void> => {
    // for optimistic ui sample
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await api.delete<Task>(`https://tasks.googleapis.com/tasks/v1/lists/${params.taskListId}/tasks/${params.taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  },
};
