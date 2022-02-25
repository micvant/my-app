const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SAND-MESSAGE';

let initialState = {
    newMessageText : '',
    dialogs : [
        {id: 1, name: "Anton"},
        {id: 2, name: "Test"},
        {id: 3, name: "Tonia"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Gena"}
    ],
    messages : [
        {id: 1, value: "Hi!"},
        {id: 2, value: "Test"},
        {id: 3, value: "Tonia"},
        {id: 4, value: "Dima"},
        {id: 5, value: "Gena"}
    ],
    getLengthMessages() {
        return this.messages.length;
    }
}

export const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT :
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE :
            let lengthMessages = state.getLengthMessages();
            let value = state.newMessageText;
            let newMessage = {id: lengthMessages++, value: value};
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type : SEND_MESSAGE});

export const updatePostTextCreator = (text) => ({ type : UPDATE_NEW_MESSAGE_TEXT, newMessage : text });
