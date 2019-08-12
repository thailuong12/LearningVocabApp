import {
    GET_WRITINGS,
    ADD_WRITING,
    GET_WRITINGS_DONE,
    ADD_WRITING_DONE,
    DELETE_WRITING,
    DELETE_WRITING_DONE,
    EDIT_WRITING,
    EDIT_WRITING_DONE,
    GET_WRITING_BY_ID,
    GET_WRITING_BY_ID_DONE
  } from "../Actions/Writing/WritingActionContants";
  import WritingFetcher from "../Fetcher/WritingFetcher";
  import { filter, mergeMap } from "rxjs/operators";
  export const getAllWriting = action$ => {
    return action$.pipe(
      filter(action => action.type === GET_WRITINGS),
      mergeMap(action => {
        return WritingFetcher.getAllWritings().then(res => {
          return { type: GET_WRITINGS_DONE, payload: res };
        });
      })
    );
  };
  export const getWritingById = action$ => {
    return action$.pipe(
      filter(action => action.type === GET_WRITING_BY_ID),
      mergeMap(action => {
        return WritingFetcher.getWritingById(action.payload).then(res => {
          return { type: GET_WRITING_BY_ID_DONE, payload: res };
        });
      })
    );
  };
  
  export const addWriting = actions$ => {
    return actions$.pipe(
      filter(action => action.type === ADD_WRITING),
      mergeMap(action => {
        return WritingFetcher.addWriting(action.payload).then(res => {
          return { type: ADD_WRITING_DONE, payload: res.data };
        });
      })
    );
  };
  export const editWriting = actions$ => {
    return actions$.pipe(
      filter(action => action.type === EDIT_WRITING),
      mergeMap(action => {
        return WritingFetcher.editWriting(action.payload).then(res => {
          return { type: EDIT_WRITING_DONE, payload: res };
        });
      })
    );
  };
  export const deleteWriting = actions$ => {
    return actions$.pipe(
      filter(action => action.type === DELETE_WRITING),
      mergeMap(action => {
        return WritingFetcher.deleteWriting(action.payload).then(res => {
          return { type: DELETE_WRITING_DONE, payload: res };
        });
      })
    );
  };
  