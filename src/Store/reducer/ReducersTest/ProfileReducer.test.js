import { addNewPost, profileReducer, deletePost } from '../ProfileReducer'

let state = {
    postData: [
        { id: 1, message: 'Hi, my name is Leon', likeCount: 12 },
        { id: 2, message: 'Nice to meet you', likeCount: 188 }
    ],
}

test('PostData must be increment', () => {
    //test data
    let action = addNewPost('Hello, my name Snake')

    // Action
    let nweState = profileReducer(state, action)
    // End
    expect(nweState.postData.length).toBe(3)
});

test('PostData message equally', () => {
    //test data
    let action = addNewPost('Hello, my name Snake')

    // Action
    let nweState = profileReducer(state, action)
    // End
    expect(nweState.postData[2].message).toBe('Hello, my name Snake')
});


test('Post must be deleted', () => {
    //test data
    let action = deletePost(2)

    // Action
    let nweState = profileReducer(state, action)
    // End
    expect(nweState.postData.length).toBe(1)
});

test('Post not deleted, if ID incorrect', () => {
    //test data
    let action = deletePost(324)

    // Action
    let nweState = profileReducer(state, action)
    // End
    expect(nweState.postData.length).toBe(2)
});
