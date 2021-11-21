import React from 'react';
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';
//Material UI
import Button from '@material-ui/core/Button';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, requiredField} from "../../../Utilits/Validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";



//ДЛЯ ВАЛИДАЦИИ ФОРМ
const maxLength30 = maxLength(30)
const minLength2 = minLength(2)
const Input = Element("textarea");

const MyPosts = (props) => {


// MAP ДЛЯ СООБЩЕНИЙ
    let postElements = props.postData
        .map((post, index) => <Posts key={index} message={post.message} likesCount={post.likesCount}/>)


    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let onAddPost = (value) => {
        props.addPost(value.login)
        // props.dispatch(addPostActionCreator())
    }

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
    // *********************************
    let onDeletePost = () => {
        props.deletePost()
        // props.dispatch(deletePostActionCreator())
    }

    return (
        <div className={style.myBlock}>
            <h4 className={style.title}>My post</h4>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <Button variant="contained" color="secondary" onClick={onDeletePost}>Delete Add</Button>
            <div className={style.posts}>New post</div>
            {postElements}
        </div>

    )
}


const MyPostsForm = (props) => {

    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field type="text"
                   name={'login'}
                   component={Input}
                   cols="60"
                   placeholder="by Eremin:)"
                   validate={[requiredField, maxLength30, minLength2]}/>
            <div>
                <Button style={{"marginBottom": "15px"}} color="primary" variant="contained" type="submit">Please Add</Button>
            </div>
        </form>
    )
}

/*
 *reduxForm - обёртка над всеми формами, можно сказать что это - (HOC)
 */
const MyPostsReduxForm = reduxForm({
    form: 'myPostsForm'//myPostsForm - ниже уникальное имя для формы!!!
})(MyPostsForm)


export default MyPosts;


