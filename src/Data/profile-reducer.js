const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    newPostText: '',
    posts : [
        {id: 1,
            value: "Hi lol!",
            img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {
            id: 2,
            value: "hello!",
            img: "data:image/jpeg;base64,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"
        },
        {id: 3,
            value: "Kek",
            img: "https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg"},
        {id: 4,
            value: "Dima",
            img: ""},
        {id: 5,
            value: "Gena",
            img: ""}
    ]
};

export const profileReducer = (state= initialState, action) => {

    switch (action.type){
        case ADD_POST:
            let count = state.length++;

            let newPost = {id: count, value: state.newPostText, img: ""}
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_TEXT_POST:

            state.newPostText = action.newText;
            return state;
        default :
            return state;

    }

}

export const addPostActionCreator = () => ({type : ADD_POST});

export const updateNewPostText = (newText) => ({type : UPDATE_TEXT_POST, newText : newText});
