import { Button, Grid, Stack, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCallback } from 'react';
import { SquarePlus } from 'tabler-icons-react';
import invariant from 'tiny-invariant';

import { useAddTask } from '@/features/tasks/hooks/useAddTask';
import { useDeleteTask } from '@/features/tasks/hooks/useDeleteTask';
import { useFetchTask } from '@/features/tasks/hooks/useFetchTask';
import { useFetchTaskList } from '@/features/tasks/hooks/useFetchTaskList';
import { usePrefetchTask } from '@/features/tasks/hooks/usePrefetchTask';
import { useUpdateTask } from '@/features/tasks/hooks/useUpdateTask';
import { useNextQueryParams } from '@/hooks/useNextQueryParams';
import { getAsString } from '@/lib/helper';

const TaskList: FC = () => {
  const { query, isReady, asPath } = useRouter();
  const { taskListId } = query;

  return <div>TaskList</div>;
};

export default TaskList;
