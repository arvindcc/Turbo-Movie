import { SET_LOADING, UNSET_LOADING, LOGIN, REQUEST_MOVIE_LIST, RECIEVE_MOVIE_LIST } from '../redux/action';
const initialState = {
    user: {},
    isLoading: false,
    movies: []
    };
const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case UNSET_LOADING:
            return {
                ...state,
                isLoading:false
            };
        case LOGIN:
            return {
                ...state,
                user:{
                    name: action.payload
                }
            };
        case RECIEVE_MOVIE_LIST:
            return {
                ...state,
                movies: action.payload
            }
            
        default:
            return state;
        }
}
export default movieReducer ;