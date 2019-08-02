import { combineReducers } from 'redux';
import topicReducer from './TopicReducers';

export default combineReducers({
    topics: topicReducer
});