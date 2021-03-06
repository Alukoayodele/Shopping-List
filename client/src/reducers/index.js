import { combineReducers } from 'redux';
import itemReducer from './ItemReducer';
import errorReducer from './ErrorReducer';
import authReducer from './AuthReducer';
export default combineReducers({
  item: itemReducer,
  auth: authReducer,
  error: errorReducer,
});
