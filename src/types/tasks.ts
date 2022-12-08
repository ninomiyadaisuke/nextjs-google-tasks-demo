export type TaskList = {
  kind: string;
  id: string;
  etag: string;
  title: string;
  updated: string;
  selfLink: string;
};

export type TaskListsResponse = {
  kind: string;
  etag: string;
  items: TaskList[];
};

export type Task = {
  kind?: string;
  id: string;
  etag?: string;
  title: string;
  updated?: string;
  selfLink?: string;
  parent?: string;
  position?: string;
  notes?: string;
  status?: 'needsAction' | 'completed';
  due?: string;
  completed?: string;
  deleted?: boolean;
  hidden?: boolean;
  links?: Link[];
};

type Link = {
  type: string;
  description: string;
  link: string;
};

export type TasksResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Task[];
};

export type GetTaskListsParams = {
  maxResults?: number;
  pageToken?: string;
};

export type GetTasksParams = {
  taskListId: string;
};

export type GetTaskParams = {
  taskListId: string;
  taskId: string;
};

export type CreateTaskParams = {
  taskListId: string;
} & Partial<Task>;

export type UpdateTaskParams = {
  taskListId: string;
} & Partial<Task>;

export type DeleteTaskParams = {
  taskListId: string;
  taskId: string;
};

export interface TasksRepository {
  getTaskLists: (params?: GetTaskListsParams, token?: string) => Promise<TaskList[]>;
  getTasks: (params: GetTasksParams, token: string) => Promise<Task[]>;
  getTask: (params: GetTaskParams, token: string) => Promise<Task>;
  createTask: (params: CreateTaskParams, token: string) => Promise<Task>;
  updateTask: (params: UpdateTaskParams, token: string) => Promise<Task>;
  deleteTask: (params: DeleteTaskParams, token: string) => Promise<void>;
}
