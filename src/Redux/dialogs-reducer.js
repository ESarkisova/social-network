import {reset} from 'redux-form';

const prefix = (actionType) => "dialogs/" + actionType;

const ADD_MESSAGE = prefix('ADD_MESSAGE');
let initialState = {
    dialogList: [
        {id: 1, name: "Lena", ava: null},
        {
            id: 2,
            name: "Sveta",
            ava: null
        },
        {id: 3, name: "Petya", ava: null}
    ],
    messageList: [
        {id: 1, text: "Hi"},
        {id: 5, text: "Hi-hi"},
        {id: 6, text: "hi!"}
    ]
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: 99,
                text: action.newMessageText
            };

            return {
                ...state,
                newMessage: '',
                messageList: [...state.messageList, newMessage]
            };


        default:
            return state;
    }
};

export const sendMessage = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
});

export const onAddMessage = (newMessageText) => {
    return (dispatch) => {
        dispatch(sendMessage(newMessageText));
        dispatch(reset('addMessage'));
    };
};


export default dialogsReducer;