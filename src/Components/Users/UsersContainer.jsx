import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { acceptFollow, acceptUnfollow, setCurrentPages, toggleFollowing, getUsersThunkCreator, follow } from '../../redux/Users-reduser';
import Preloader from '../../Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator (this.props.currentPage, this.props.pageSize);
    }
 

    onPageChange = (currentPage) => {
        this.props.getUsersThunkCreator (currentPage, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                currentPage={this.props.currentPage}
                users={this.props.users}
                acceptUnfollow={this.props.acceptUnfollow}
                acceptFollow={this.props.acceptFollow}
                toggleFollowing={this.props.toggleFollowing}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}/>
        </>
    };
}

let mapSteteToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export default connect(mapSteteToProps, 
    {acceptFollow, acceptUnfollow, toggleFollowing, getUsersThunkCreator, follow})
    (UsersContainer);