import * CellAPIUtil from '../util/cell_api_util';


export const RECEIVE_CELLS = 'RECEIVE_CELLS';
export const RECEIVE_CELL = 'RECEIVE_CELL';

export const requestCells = () => dispatch => (
  CellAPIUtil.fetchCells().then(cells => dispatch(receiveCells(cells)))
)

export const receiveCells = (cells) => ({
  type: RECEIVE_CELLS,
  cells,
})
