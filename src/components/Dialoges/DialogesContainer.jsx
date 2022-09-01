import classes from './Dialoges.module.css';
import { updateNewMessageCreator } from '../Redux/DialogesReducer';
import { sendMessageCreator } from '../Redux/DialogesReducer';
import Dialoges from './Dialoges';
import { connect } from 'react-redux';

let mapStateToProps=(state)=>{
    return{
        dialogesPage:state.dialogesPage}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageText:(body)=>{dispatch(updateNewMessageCreator(body))},
        sendMessage:()=>{dispatch(sendMessageCreator())}
    }
}
const DialogesContainer =connect(mapStateToProps,mapDispatchToProps)(Dialoges)

export default DialogesContainer;