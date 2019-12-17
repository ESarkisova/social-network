import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postList: [
                {
                    id: 1,
                    likes: 1,
                    text: "Hi post",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
                },
                {
                    id: 2,
                    likes: 5,
                    text: "Hi-hi post",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
                },
                {
                    id: 3,
                    likes: 6,
                    text: "hi post!",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
                }
            ],
            newPost: ""
        },
        dialogsPage: {
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
            ],
            newMessage: ""
        },
        sidebar: {
            friendList: [
                {id: 11, name: "Anton", ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
                {
                    id: 12,
                    name: "Grisha",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQH5fsQDLH3DZjPBQE0dvFa5fx-XaSo3yiMdLP6SI9_3ZAMv5&s"
                },
            ]
        }
    },
    _callSuscriber() {
        console.log("Not suscribe (observer)")
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSuscriber = observer;
    }
};

export default store;