import { delay } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'

const requestDog = () => {
  return {type: 'REQUESTED_DOG'}
}
const requestDogError = () => {
  return {type: 'REQUESTED_DOG_FAILED'}
}
const requestDogSuccess = data => {
  return {type: 'REQUESTED_DOG_SUCCEEDED', url: data.message}
}

const fetchDog = () => {
  return { type: 'FETCHED_DOG' }
};

function* watchFetchDog() {
  yield console.log('222')
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}

export default watchFetchDog
