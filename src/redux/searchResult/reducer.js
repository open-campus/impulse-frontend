import {
	SEARCH_GET_RESULTS,
	SEARCH_GET_RESULTS_SUCCESS,
	SEARCH_GET_RESULTS_ERROR,
	SEARCH_SEARCH_RESULT,
	SEARCH_SEARCH_RESULT_PRO
} from 'Constants/actionTypes';

const INIT_STATE = {
	allResults: null,
	filterResult: null,
	results: null,
	resultsPro: null,
	error: '',
	searchKeyword: '',
	loadingResults: false,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case SEARCH_GET_RESULTS:
			return { ...state, loadingResults: false };

		case SEARCH_GET_RESULTS_SUCCESS:
			return { ...state, loadingResults: true, allResults: action.payload.results, results: action.payload.results };

		case SEARCH_GET_RESULTS_ERROR:
			return { ...state, loadingResults: false, error: action.payload };
       
		case SEARCH_SEARCH_RESULT:
			if (action.payload.keyword === '') {
				return { ...state, results: state.allResults };
			} else {
				const keyword = action.payload.keyword.toLowerCase();
				switch (action.payload.filterKey) {
					case 'topic':
						var searchedResults = state.allResults.filter((item) => item.Topic.toLowerCase().indexOf(keyword) > -1);

						break;
				     case 'institution':
							var searchedResults = state.allResults.filter((item) => item.Institution.toLowerCase().indexOf(keyword) > -1);
						break;
					 case 'year' :
							var searchedResults = state.allResults.filter((item) => item.Year.indexOf(keyword) > -1);
						break;
					 case 'author' : 
					 var searchedResults = state.allResults.filter((item) => item.Author.toLowerCase().indexOf(keyword) > -1);
						break;
					 default:
						var searchedResults = state.allResults.filter((item) => item.Author.toLowerCase().indexOf(keyword) > -1);
						break;
				}
				   
				return { ...state, results: searchedResults , filterResult: searchedResults}
			}
	case SEARCH_SEARCH_RESULT_PRO: 
	if (action.payload.keyword === '') {
		return { ...state, resultsPro: state.filterResult };
	} else {
		const keyword = action.payload.keyword.toLowerCase();
		switch (action.payload.filterKey) {
			case 'topic':
				var searchedResults = state.filterResult.filter((item) => item.Topic.toLowerCase().indexOf(keyword) > -1);

				break;
			 case 'institution':
					var searchedResults = state.filterResult.filter((item) => item.Institution.toLowerCase().indexOf(keyword) > -1);
				break;
			 case 'year' :
					var searchedResults = state.filterResult.filter((item) => item.Year.indexOf(keyword) > -1);
				break;
			 case 'author' : 
			 var searchedResults = state.filterResult.filter((item) => item.Author.toLowerCase().indexOf(keyword) > -1);
				break;
			 default:
				var searchedResults = state.filterResult.filter((item) => item.Author.toLowerCase().indexOf(keyword) > -1);
				break;
		}
		
		return { ...state, results: searchedResults }
	}

		default: return { ...state };
	}
}
