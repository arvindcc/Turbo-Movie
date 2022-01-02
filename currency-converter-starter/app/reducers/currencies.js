import {
  CHANGE_CURRENT_AMOUNT,
  SWAP_CURRENCY,
  swapCurrency,
  changeCurrencyAmount,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  changeBaseCurrency,
  changeQuoteCurrency,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../action/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
};

const setConversion = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency || state.baseCurrency,
        quoteCurrency: state.quoteCurrency,
        conversions: setConversion(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        baseCurrency: state.baseCurrency,
        quoteCurrency: action.currency || state.quoteCurrency,
        conversions: setConversion(state, action),
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversion(state, { currency: state.baseCurrency }),
      };

    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };

    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
console.log('initialState', initialState);
console.log('swapCurrrency', reducer(initialState, swapCurrency()));
console.log('changeCurrencyAmount ', reducer(initialState, changeCurrencyAmount()));
console.log('changeBaseCurrency', reducer(initialState, changeBaseCurrency()));
console.log('changeQuoteCurrency', reducer(initialState, changeQuoteCurrency()));


export default reducer;
