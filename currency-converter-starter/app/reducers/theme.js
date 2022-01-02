import {
  CHANGE_THEME_COLOR,
  changeThemeColor,
} from '../action/theme';

const initialState = {
  primaryColor: '#4F6D7A',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};

console.log('changeThemeColor', reducer(initialState, changeThemeColor()));
export default reducer;
