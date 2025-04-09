import { legacy_createStore as createStore } from 'redux';
import mainReducer from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const store = createStore(mainReducer, devToolsEnhancer());

export default store;