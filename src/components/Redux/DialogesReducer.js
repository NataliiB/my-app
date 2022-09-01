const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogesData: [
        { id: '1', name: 'Valeriy' },
        { id: '2', name: 'Masha' },
        { id: '3', name: 'Rita' }
    ],
    messagesData: [
        { id: '1', message: 'Hello,how are you?' },
        { id: '2', message: 'Hi,please help me' },
        { id: '3', message: 'Let`s phone each other more often' }
    ],
    newMessageBody: ''
}


export const dialogesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageBody
            }
        case SEND_MESSAGE:
            let messageBody = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: messageBody }],
                newMessageBody: ''
            }
        default: return state;
    }
}
    export const updateNewMessageCreator = (body) =>
        ({ type: UPDATE_NEW_MESSAGE_BODY, messageBody: body });
    export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
    export default dialogesReducer;