import { combineReducers } from 'redux';
import vocabReducer from './VocabReducers';
import writingReducer from './WritingReducers';
export default combineReducers({
    vocabs: vocabReducer,
    writings: writingReducer
});