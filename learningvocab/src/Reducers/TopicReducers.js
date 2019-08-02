import { GET_TOPICS, ADD_TOPIC, GET_TOPICS_DONE } from "../Actions/Topic/TopicActionContants";

const initialState = {
  topicList: null,
  demo :'demoooooo'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS_DONE:
      return {
        ...state,
        topicList: action.payload
      };
    case ADD_TOPIC:
      return {
        ...state,
        demo: action.payload
      };
    default:
      return state;
  }
};
