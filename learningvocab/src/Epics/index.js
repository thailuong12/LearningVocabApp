import { getAllTopic, addTopic, deleteTopic, editTopic } from "./TopicEpics";
import { combineEpics } from "redux-observable";
export default combineEpics(getAllTopic, addTopic, deleteTopic, editTopic);
