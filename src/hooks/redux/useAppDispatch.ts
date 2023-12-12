import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@src/redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
