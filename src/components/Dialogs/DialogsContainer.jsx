import {sendMessageCreator, updatePostTextCreator} from "../../Data/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthNavigate} from "../../hoc/WithAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage,
        isAuth: state.authPage.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = updatePostTextCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageCreator();
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthNavigate
)(Dialogs);;