import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile, getStatusThunk} from "../../Data/profile-reducer";
import {useMatch} from "react-router";
import {WithAuthNavigate} from "../../hoc/WithAuthNavigate";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return <>
            <Profile {...this.props} status={this.props.status} profile={this.props.profile}/>
        </>
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainer {...props} match={match} getProfileThunk={props.getProfileThunk} getStatusThunk={props.getStatusThunk}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfileThunk, getStatusThunk}),
    WithAuthNavigate
)(ProfileMatch);
