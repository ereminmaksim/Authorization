import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';
import {Button} from '@material-ui/core';
import {Field, reduxForm} from "redux-form";
import {maxLength100, minLength, requiredField} from "../../Utilits/Validators/validators";

//Взята из библиотеки (react-router-dom)компонента для перехода в нашем случае LOGIN
import {Redirect} from "react-router";
import {Element} from "../common/FormsControls/FormsControls";




//ДЛЯ ВАЛИДАЦИИ ФОРМ
const maxLengthSto = maxLength100(100)
const minLength2 = minLength(2)



const Dialogs = (props) => {

    let state = props.dialogsPage
//*************************************************************************
    let dialogItemElements = state.dialogItem
        .map((dialog, index) => <DialogsItem
            key={index}
            name={dialog.name}
            id={dialog.id}
            ava={dialog.ava}/>)
//*************************************************************************
    // MAP ДЛЯ СООБЩЕНИЙ
    let messagesDateElements = state.messagesDate
        .map((messages, index) => <Messages key={index} message={messages.message}/>)
//*************************************************************************

    // let newMessageBody = state.newMessageBody;


    //ДЛЯ ПРОВЕРКИ на вход REDUX-FORM!!!
    let addMessage = (value) => {
        props.onSendMessageClick(value.login)
    }


    return (
        <div className={style.dialogs}>
            {/*****************************************************************************************/}
            {/*            ЛЕВАЯ СТОРОНА*/}
            <div className={`${style.dialogs_items} ${style.container}`}>
                <div>
                    {dialogItemElements}
                </div>
            </div>

            {/*****************************************************************************************/}
            {/*            ПРАВАЯ СТОРОНА*/}
            <div className={`${style.messages} ${style.container} ${style.darker}`}>
                <div>
                    {messagesDateElements}
                </div>
                <DialogsReduxForm  onSubmit={addMessage}/>
            </div>


        </div>

    )
}
const Textarea = Element("textarea");

const DialogsForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <Field type="text"
                   name={'login'}
                   component={Textarea}
                   className={style.inputs}
                // ref={ newPost }
                   placeholder="Отправить"
                   validate={[requiredField, maxLengthSto, minLength2]}/>
            <Button className={style.btnDialogs} type="submit" rowsMin={3} variant="contained"
                    color="primary">
                Send
            </Button>
        </form>
    )
}


/*
 *reduxForm - обёртка над всеми формами, можно сказать что это - (HOC)
 */
const DialogsReduxForm = reduxForm({

    form: 'dialogMessageForm'//dialogMessageForm - ниже уникальное имя для формы!!!
})(DialogsForm)



export default Dialogs;
