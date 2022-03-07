import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUsersProfile} from "../../Data/profile-reducer";
import {useMatch} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : '2';

        let path = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
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

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainer {...props} match={match} />
    )
}
let mapStateToProps = (state) => ({
    profile : state.profilePage.profile
});
export default connect(mapStateToProps, {  setUsersProfile })(ProfileMatch );

//export default connect(mapStateToProps,{setUsersProfile})(ProfileContainer);