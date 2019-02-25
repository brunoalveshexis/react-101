import { Button } from './Button';
import { connect } from 'react-redux';
import { toogleAction } from '../../state/toogle/actions';

// function mapStateToProps(state) {
//     return null;
// }

// function mapDispatchToProps(dispatch) {
//     return {
//                  // TO DO THIS THE toogleAction  should be a plain object    
//         onClick: () => dispatch(toogleAction)
//     };
// }

// mapDispatchToProps can be a Object.
// Is more efficient than the function
const mapDispatchToProps = {
// TO DO THIS THE toogleAction should be a function creator    
    // onClick: toogleAction
};

export default connect(/*mapStateToProps*/null, mapDispatchToProps)(Button);

