import {profileAPI, usersAPI} from "../API/api";
// import {setFollowingProgress, undFollowSuccess} from "./usersReducer";

const ADD_POST = "ADD-POST";
const DELETE_POST_TEXT = "DELETE-POST-TEXT";
//ДЛЯ ОТОБРАЖЕНИЯ ПОЛЬЗОВАТЕЛЕЙ
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_USERS_PROFILE_STATUS = "SET-USERS-PROFILE-STATUS";


let initialState = {
    postData: [
        {id: 1, message: "Hi? how are you?", likesCount: 1},
        {id: 2, message: "Cool!!! my brother", likesCount: 11},
        {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
        {id: 4, message: "You've never believed in The One.", likesCount: 5},
        {id: 5, message: "I still don't.", likesCount: 17},
        {id: 6, message: "Then why are you doing this?", likesCount: 8},
        {id: 7, message: "I believe in him.", likesCount: 3},
    ],
    newPostText: "by Eremin:)",
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {


    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 0,
                message: action.login,
                likeCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, (newPost)]

            }
        }
        case DELETE_POST_TEXT: {
            let delPost = {
                id: 0,
                message: action.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.pop(delPost);
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USERS_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (login) => ({type: ADD_POST, login})

//Смена синтаксиса ES6
// export const deletePostActionCreator = () => {
//     return {type: DELETE_POST_TEXT}
// }
export const deletePostActionCreator = () => ({type: DELETE_POST_TEXT})

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

//ДЛЯ СТАТУСА В В ПРОФАЙЛЛИСТЕ!!!
export const setProfileStatus = (status) => ({type: SET_USERS_PROFILE_STATUS, status})

//Санка на setProfile

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    }
}

//Санка на setProfileStatus
export const profileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
}

//Санка на profileStatusUpdate
export const profileStatusUpdate = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0)
                dispatch(setProfileStatus(status))
            })
    }
}


export default profileReducer;