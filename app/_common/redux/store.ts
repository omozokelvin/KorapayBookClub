import { rootReducer } from '@/app/_common/redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch<AppDispatch>();

export { dispatch, store, useDispatch, useSelector };
