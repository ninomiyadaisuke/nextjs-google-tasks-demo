import { useApi } from '@/hooks/useApi';

import { tasksRepository } from '../tasksRepository';

export const useFetchTaskLists = (maxResults?: number) => {
  return useApi(
    ['taskLists', { maxResults }],
    // eslint-disable-next-line @typescript-eslint/no-shadow
    async ({ maxResults }, token) => {
      return tasksRepository.getTaskLists({ maxResults }, token);
    },
  );
};
