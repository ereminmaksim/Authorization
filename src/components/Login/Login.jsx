import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLength, minLength, requiredField} from "../../Utilits/Validators/validators";

//оборачиваем Хоком REDUX-FORM!!! (LoginReduxForm)

//ДЛЯ ВАЛИДАЦИИ ФОРМ
const maxLength15 = maxLength(15)
const minLength2 = minLength(2)
const Logins = Element("input");

const LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props


    return (
        <div className={style.loginContainer}>
            <section className={style.login} id="login">
                <header>
                    <h2>Заполните форму регистрации</h2>
                </header>
                <form onSubmit={handleSubmit} className={style.loginForm} action="#" method="post">

                    <Field type="text" className={style.loginInput} name='login' component={Logins}
                           placeholder="придумайте имя" required autoFocus
                           validate={[requiredField, maxLength15, minLength2]}/>

                    <Field type="password" className={style.loginInput} name='password' component={Logins}
                           placeholder="Пароль" required
                           validate={[requiredField, maxLength15, minLength2]}/>

                    <Field type='checkbox' name='rememberMe' component={Logins}
                           validate={[requiredField, maxLength15, minLength2]}/> Запомнить меня

                    <div className={style.submitContainer}>
                        <button type="submit" disabled={pristine || submitting} className={style.loginButton}>Войти
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
};

/*
 *reduxForm - обёртка над всеми формами, можно сказать что это - (HOC)
 */
const LoginReduxForm = reduxForm({

    form: 'loginForm'//loginForm - ниже уникальное имя для формы!!!
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={style.loginPage}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


