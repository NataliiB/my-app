import classes from './Dialoges.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';




const Dialoges = (props) => {
    let DialogesElements = props.dialogesPage.dialogesData.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessagesElements = props.dialogesPage.messagesData.map(m => <Message message={m.message} />);
    let newMessageBody = props.dialogesPage.newMessageBody;


let updateNewMessageText = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
};
let sendMessage = () => {
    props.sendMessage();

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