import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';
import UserReducer from './user_reducer';


const RootReducer = combineReducers({
  errors: ErrorReducer,
  session: SessionReducer,
  users: UserReducer,
});


export default RootReducer;
