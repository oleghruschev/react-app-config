import { combineReducers } from 'redux';

import firstReducer from './firstReducer';

export const reducers = {
  firstReducer,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
