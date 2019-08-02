import {
  GET_TOPICS,
  ADD_TOPIC,
  GET_TOPICS_DONE
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
