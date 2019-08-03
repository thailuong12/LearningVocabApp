import {
  GET_TOPICS,
  ADD_TOPIC,
  GET_TOPICS_DONE,
  ADD_TOPIC_DONE
} from "../Actions/Topic/TopicActionContants";

const initialState = {
  topicList: [],
  demo: "demoooooo"
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

    default:
      return state;
  }
};
