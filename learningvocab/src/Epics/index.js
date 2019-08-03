import { getAllTopic, addTopic } from "./TopicEpics";
import { combineEpics } from "redux-observable";
export default combineEpics(getAllTopic, addTopic);
