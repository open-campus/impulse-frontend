import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';

import landingPage from './landingPage/reducer';

import searchResultApp from './searchResult/reducer';


const reducers = combineReducers({
  menu,
  settings,
  authUser,
  landingPage,
  searchResultApp
});

export default reducers;