import {fetchMovieList} from '../api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_LOADING = 'SET_LOADING'
export const UNSET_LOADING = 'UNSET_LOADING'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const REQUEST_MOVIE_LIST = 'REQUEST_MOVIE_LIST'
export const RECIEVE_MOVIE_LIST = 'RECIEVE_MOVIE_LIST'

export const setLoding = () => ({
    type: SET_LOADING,
}) 

export const unsetLoding = () => ({
    type: UNSET_LOADING,
}) 

export const login = payload => ({
    type: LOGIN,
    payload
})

export const logout = payload => ({
    type: LOGOUT,
    payload
})

export const recieveMovieList = payload => ({
    type: RECIEVE_MOVIE_LIST,
    payload
})

export const requestMovieList = () => dispatch => {
    dispatch({
        type: REQUEST_MOVIE_LIST,
    })
    dispatch(setLoding())
    fetchMovieList()
        .then( response => {
            dispatch( recieveMovieList(response.data.data.movies));
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => dispatch(unsetLoding()));
}

export const requestLogin = payload => async dispatch => {
    try{
        dispatch(setLoding())
        login(payload)
        await AsyncStorage.setItem('token', Math.random().toString(36).slice(2))
    }catch (e){
        console.log(e)
    }finally{
        dispatch(unsetLoding())
    }
}

export const requestLogout = () => async dispatch => {
    try{
        dispatch(setLoding())
        dispatch(logout())
        await AsyncStorage.removeItem('token')
    }catch (e){
        console.log(e)
    }finally{
        dispatch(unsetLoding())
    }
}
