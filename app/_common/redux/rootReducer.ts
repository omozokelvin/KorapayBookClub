import bookReducer from '@/app/_common/redux/slices/bookSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: bookReducer,
});

export { rootReducer };
