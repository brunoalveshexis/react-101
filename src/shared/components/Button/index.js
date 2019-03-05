import { Button } from './Button';
import { connect } from 'react-redux';
import { usersFetch } from '../../state/users/action';

const mapDispatchToProps = {  
    onClick: usersFetch
};

export default connect(null, mapDispatchToProps)(Button);