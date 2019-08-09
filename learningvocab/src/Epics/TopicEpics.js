import {
  GET_TOPICS,
  ADD_TOPIC,
  GET_TOPICS_DONE,
  ADD_TOPIC_DONE,
  EDIT_TOPIC,
  EDIT_TOPIC_DONE,
  DELETE_TOPIC,
  DELETE_TOPIC_DONE
} from "../Actions/Topic/TopicActionContants";
import TopicFetcher from "../Fetcher/TopicFetcher";
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
        if (res.success) {
          return { type: ADD_TOPIC_DONE, payload: res.data };
        }
      });
    })
  );
};
export const editTopic = actions$ => {
  return actions$.pipe(
    filter(action => action.type === EDIT_TOPIC),
    mergeMap(action => {
      return TopicFetcher.editTopic(action.payload).then(res => {
        return { type: EDIT_TOPIC_DONE, payload: res };
      });
    })
  );
};
export const deleteTopic = actions$ => {
  return actions$.pipe(
    filter(action => action.type === DELETE_TOPIC),
    mergeMap(action => {
      return TopicFetcher.deleteTopic(action.payload).then(res => {
        return { type: DELETE_TOPIC_DONE, payload: res };
      });
    })
  );
};
