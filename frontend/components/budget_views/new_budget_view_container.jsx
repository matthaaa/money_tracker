import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {addCell} from '../../actions/cell_actions';

// Components
import NewBudgetView from './new_budget_view';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  return ({
    currentUser,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addCell: (cell) => dispatch(addCell(cell))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewBudgetView));
