import {
  GET_TOPICS_DONE,
  ADD_TOPIC_DONE,
  DELETE_TOPIC_DONE
} from "../Actions/Topic/TopicActionContants";
import { filter } from "lodash/fp";
const initialState = {
  topicList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS_DONE:
      return {
        ...state,
        topicList: action.payload
      };
    case ADD_TOPIC_DONE:
      return {
        ...state,
        topicList: [...state.topicList, action.payload]
      };
    case DELETE_TOPIC_DONE:
      return {
        ...state,
        topicList: filter(v => v.id !== action.payload.id, state.topicList)
      };

    default:
      return state;
  }
};
