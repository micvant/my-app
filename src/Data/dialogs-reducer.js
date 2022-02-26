const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SAND-MESSAGE';

let initialState = {
    newMessageText : '',
    dialogs : [
        {id: 0, name: "Anton"},
        {id: 1, name: "Test"},
        {id: 2, name: "Tonia"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Gena"}
    ],
    messages : [
        {id: 0, value: "Hi!"},
        {id: 1, value: "Test"},
        {id: 2, value: "Tonia"},
        {id: 3, value: "Dima"},
        {id: 4, value: "Gena"}
    ]
}

let updateNewMessageText = (state, action) => {
    return {
        ...state,
        newMessageText : action.newMessage
    };
}

let sendMessage = (state) => {

    let count = state.messages.length;
    let text = state.newMessageText;
    let newMessage = {id: count, value: text};
        // спрэт оператор ...state
    return {
        ...state,
        messages : [ ...state.messages,  newMessage],
        newMessageText : ''
    };
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT :
            return updateNewMessageText(state, action);
        case SEND_MESSAGE :
            return sendMessage(state);
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type : SEND_MESSAGE});

export const updatePostTextCreator = (text) => ({ type : UPDATE_NEW_MESSAGE_TEXT, newMessage : text });
