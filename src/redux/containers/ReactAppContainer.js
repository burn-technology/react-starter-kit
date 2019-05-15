import { connect } from 'react-redux';
// IMPORT ACTION

//IMPORT COMPONENT
import ReactApp from '../../components/ReactApp/ReactApp'

const mapStateToProps = (state, ownProps) => ({
  // RETURN STATE
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // RETURN DISPATCHER 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactApp)

