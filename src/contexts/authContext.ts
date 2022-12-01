import { atomWithStorage } from 'jotai/utils';

import { User } from '@/types/user';

export const authAtom = atomWithStorage<User | undefined>('auth', undefined);
