import {
  takeEvery,
  select,
  call,
  put,
} from 'redux-saga/effects';

import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../action/currencies';

const getLatestRate = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
  try {
    let { currency } = action;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_QUOTE_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
