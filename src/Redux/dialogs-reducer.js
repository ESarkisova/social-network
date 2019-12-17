import {reset} from 'redux-form';

const prefix = (actionType) => "dialogs/" + actionType;

const ADD_MESSAGE = prefix('ADD_MESSAGE');
let initialState = {
    dialogList: [
        {id: 1, name: "Lena", ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {
            id: 2,
            name: "Sveta",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQH5fsQDLH3DZjPBQE0dvFa5fx-XaSo3yiMdLP6SI9_3ZAMv5&s"
        },
        {id: 3, name: "Petya", ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"}
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