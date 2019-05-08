import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';

import searchResultSagas from './searchResult/saga';


export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    
    searchResultSagas()
    
  ]);
}
