import {
    SEARCH_GET_RESULTS,
    SEARCH_GET_RESULTS_SUCCESS,
    SEARCH_GET_RESULTS_ERROR,
    SEARCH_SEARCH_RESULT,
    SEARCH_SEARCH_RESULT_PRO
} from 'Constants/actionTypes';


export const getResults = () => ({
    type: SEARCH_GET_RESULTS
});

export const getResultsSuccess = (results) => {
    return ({
        type: SEARCH_GET_RESULTS_SUCCESS,
        payload: { results }
    })
};

export const getResultsError = (error) => ({
    type: SEARCH_GET_RESULTS_ERROR,
    payload: error
});


export const searchResult = (keyword, filterKey) => ({
    type: SEARCH_SEARCH_RESULT,
    payload: {keyword, filterKey}
});

export const searchResultPro = (keyword, filterKey) => ({
    type: SEARCH_SEARCH_RESULT_PRO,
    payload: {keyword, filterKey}
});