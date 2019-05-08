
import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getCurrentTime } from 'Util/Utils'

import {
	SEARCH_GET_RESULTS,
} from 'Constants/actionTypes';

import {
	getResultsSuccess,
	getResultsError,
} from './actions';

import resultsData from "Data/search.results.json";



function* loadResults() {
	try {
		const response = yield call(loadResultsAsync);
		const { results } = response;
		yield put(getResultsSuccess(results));
	} catch (error) {
		yield put(getResultsError(error));
	}
}

const loadResultsAsync = async () => {
		const results = resultsData.data;
		return await new Promise((success, fail) => {
			setTimeout(() => {
				success({ results});
			}, 2000);
		})
			.then(response => response)
			.catch(error => error);
	
}


export function* watchGetResult() {
	yield takeEvery(SEARCH_GET_RESULTS, loadResults);
}


export default function* rootSaga() {
	yield all([
		fork(watchGetResult)
	]);
}