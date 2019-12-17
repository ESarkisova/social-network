let initialState = {
    friendList: [
        {id: 11, name: "Anton", ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {
            id: 12,
            name: "Grisha",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQH5fsQDLH3DZjPBQE0dvFa5fx-XaSo3yiMdLP6SI9_3ZAMv5&s"
        },
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;