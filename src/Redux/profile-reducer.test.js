import profileReducer, {onAddPost} from "./profile-reducer";

it("Added post (profile)", ()=> {
    let state = {
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
        ]
    };
    let action = onAddPost("Test post");
    let newState = profileReducer(state, action)

    expect(newState.postList.length).toBe(4);
});