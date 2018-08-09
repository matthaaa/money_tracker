import {merge} from 'lodash';

import {
  RECEIVE_CELLS,
  RECEIVE_CELL,
} from '../actions/cell_actions';

const cellReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
      case RECEIVE_CELLS:
        return merge({}, action.cells);
      case RECEIVE_CELL:
        return merge({}, oldState, {[action.payload.cell.id]: action.payload.cell});
      default:
        return oldState;
  }
}
