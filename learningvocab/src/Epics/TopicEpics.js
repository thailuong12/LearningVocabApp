import {
  GET_TOPICS,
  ADD_TOPIC,
  GET_TOPICS_DONE,
  ADD_TOPIC_DONE
} from "../Actions/Topic/TopicActionContants";
import TopicFetcher from "../Fetcher/TopicFetcher";
import { getTopics } from "../Actions/Topic/TopicActions";
import { filter, mergeMap } from "rxjs/operators";
export const getAllTopic = action$ => {
  return action$.pipe(
    filter(action => action.type === GET_TOPICS),
    mergeMap(action => {
      return TopicFetcher.getAllTopics().then(res => {
        return { type: GET_TOPICS_DONE, payload: res };
      });
    })
  );
};

export const addTopic = actions$ => {
  return actions$.pipe(
    filter(action => action.type === ADD_TOPIC),
    mergeMap(action => {
      return TopicFetcher.addTopic(action.payload).then(res => {
        return { type: ADD_TOPIC_DONE, payload: res };
      });
    })
  );
};
