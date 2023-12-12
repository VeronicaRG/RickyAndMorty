import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '@src/redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
