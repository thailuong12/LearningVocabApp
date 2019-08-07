import {
  GET_TOPICS,
  ADD_TOPIC,
  EDIT_TOPIC,
  DELETE_TOPIC
} from "./TopicActionContants";

export const getTopics = () => ({ type: GET_TOPICS });
export const addTopic = data => ({ type: ADD_TOPIC, payload: data });
export const editTopic = data => ({ type: EDIT_TOPIC, payload: data });
export const deleteTopic = data => ({ type: DELETE_TOPIC, payload: data });
