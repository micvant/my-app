import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUsersProfile} from "../../Data/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let path = `https://social-network.samuraijs.com/api/1.0/profile/2`;
        axios.get(path).then((response)=> {
            let data = response.data;

            this.props.setUsersProfile(data);
        })
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
            </>
    }

}

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile
});

export default connect(mapStateToProps,{setUsersProfile})(ProfileContainer);