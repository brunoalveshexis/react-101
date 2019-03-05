import { connect } from 'react-redux';
import UsersList from './UsersList';

function mapStateToProps(state) {
    return {
        users: state.usersList
    }
};

export default connect(mapStateToProps, null)(UsersList);
