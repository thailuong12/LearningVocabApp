import { GET_TOPICS, ADD_TOPIC } from "./TopicActionContants";

export const getTopics = () => ({ type: GET_TOPICS });
export const addTopic = (data) => ({ type: ADD_TOPIC, payload: data });

