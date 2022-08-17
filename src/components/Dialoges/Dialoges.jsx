import classes from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { updateNewMessageCreator } from '../Redux/State';
import { sendMessageCreator } from '../Redux/State';



const Dialoges = (props) => {
    
    let DialogesElements = props.dialogesGeneralData.dialogesData.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessagesElements = props.dialogesGeneralData.messagesData.map(m => <Message message={m.message} />);
    let newMessageBody = props.dialogesGeneralData.newMessageBody;


let updateNewMessageText = (e) => {
    let body = e.target.value;
    let action = updateNewMessageCreator(body);
    props.dispatch(action);
};
let sendMessage = () => {
    props.dispatch(sendMessageCreator())

};
    return (<div>
        <div className={classes.dialoges}>
            <div className={classes.dialogItems}>
                {DialogesElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
            </div>
        </div>
        <div>
            <div> <textarea value={newMessageBody} onChange={updateNewMessageText} ></textarea></div>
            <div><button onClick={sendMessage}>Send message</button></div>

        </div>
    </div>
    )
};

export default Dialoges;