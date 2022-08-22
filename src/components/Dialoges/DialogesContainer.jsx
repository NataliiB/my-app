import classes from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { updateNewMessageCreator } from '../Redux/DialogesReducer';
import { sendMessageCreator } from '../Redux/DialogesReducer';
import Dialoges from './Dialoges';
import StoreContext from '../../StoreContext';




const DialogesContainer = () => {

    return <StoreContext.Consumer> 
        {
          (store) => {
            let state = store.getState().dialogesPage;

            let updateNewMessageText = (body) => {
                store.dispatch(updateNewMessageCreator(body));
            };
            let sendMessage = () => {
                store.dispatch(sendMessageCreator())

            };

            return < Dialoges sendMessage={sendMessage} dialogesPage={state} updateNewMessageText={updateNewMessageText} />
        }
    }
    </StoreContext.Consumer>

}


export default DialogesContainer;