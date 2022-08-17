const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi,how are you?', likeCount: 54 },
                { id: 2, message: "It's my first post", likeCount: 67 }
            ],
            newPostText: ''
        },
        dialogesPage: {
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
        },
        usersFriendsPage: {
            friendsData: [
                { id: '1', name: 'Katya', avatar: 'https://tekst-pesni.online/wp-content/uploads/2021/01/1598182187_katya-adushkina.jpg' },
                { id: '1', name: 'Vova', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6zgkTi9qzgdV5Nt0o6b4HKw9idw09GWUXQ&usqp=CAU' },
                { id: '1', name: 'Maks', avatar: 'https://focus.ua/static/storage/thumbs/920x465/2/11/5b2ee39b-3ec7dd7d60cc53c7c19d0128d2cb0112.jpg?v=8314_1' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogesPage.newMessageBody = action.messageBody;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let messageBody = this._state.dialogesPage.newMessageBody;
            this._state.dialogesPage.messagesData.push({ id: 4, message: messageBody });
            this._state.dialogesPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};
export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, messageBody: body });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export default store;