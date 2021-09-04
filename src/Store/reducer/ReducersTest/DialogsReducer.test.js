import { dialogsReducer, sendNewMessage } from "../DialogsReducer";

let state = {
    messagesData: [
        { id: 1, message: 'Hello,leon' },
        { id: 2, message: 'Hello,Sasha' },
        { id: 3, message: 'Hello,Dog' },
        { id: 4, message: 'Cat' },
    ],
}


test('Message sent', () => {
    //test data
    let action = sendNewMessage('I want buy it')

    // Action
    let newState = dialogsReducer(state, action)
    // End
    expect(newState.messagesData.length).toBe(5)
});
