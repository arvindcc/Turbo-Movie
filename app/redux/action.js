import {fetchMovieList} from '../api'

export const SET_LOADING = 'SET_LOADING'
export const UNSET_LOADING = 'UNSET_LOADING'
export const LOGIN = 'LOGIN'
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
            console.log( "received ", response.data.data.movies );
            dispatch( recieveMovieList(response.data.data.movies));
        });

}
