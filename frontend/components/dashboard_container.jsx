import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import DashboardView from './dashboard_view';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  return ({
    currentUser,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardView));
