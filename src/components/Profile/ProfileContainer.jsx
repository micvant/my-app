import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile} from "../../Data/profile-reducer";
import {useMatch} from "react-router";
import {WithAuthNavigate} from "../../hoc/WithAuthNavigate";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getProfileThunk(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainer {...props} match={match} getProfileThunk={props.getProfileThunk}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUsersProfile, getProfileThunk})(WithAuthNavigate(ProfileMatch));
