import { connect } from 'react-redux';
// IMPORT ACTION

//IMPORT COMPONENT
import {{pascalCase componentName}} from '../../components/{{pascalCase componentName}}/{{pascalCase componentName}}'

const mapStateToProps = (state, ownProps) => ({
  // RETURN STATE
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // RETURN DISPATCHER 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({{pascalCase componentName}})

