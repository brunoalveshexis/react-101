import Input from "./Input";
import { connect } from 'react-redux';
import { updateQuery } from "../../state/users/action";

function mapDispatchToProps(dispatch) {
    return {
        onChange: (value) => dispatch(updateQuery(value))
    }
};

export default connect(null, mapDispatchToProps)(Input);
