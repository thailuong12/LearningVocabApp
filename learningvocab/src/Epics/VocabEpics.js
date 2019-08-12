import {
  GET_VOCABS,
  ADD_VOCAB,
  GET_VOCABS_DONE,
  ADD_VOCAB_DONE,
  DELETE_VOCAB,
  DELETE_VOCAB_DONE,
  EDIT_VOCAB,
  EDIT_VOCAB_DONE
} from "../Actions/Vocab/VocabActionContants";
import VocabFetcher from "../Fetcher/VocabFetcher";
import { filter, mergeMap } from "rxjs/operators";
export const getAllVocab = action$ => {
  return action$.pipe(
    filter(action => action.type === GET_VOCABS),
    mergeMap(action => {
      return VocabFetcher.getAllVocabs().then(res => {
        return { type: GET_VOCABS_DONE, payload: res };
      });
    })
  );
};

export const addVocab = actions$ => {
  return actions$.pipe(
    filter(action => action.type === ADD_VOCAB),
    mergeMap(action => {
      return VocabFetcher.addVocab(action.payload).then(res => {
        return { type: ADD_VOCAB_DONE, payload: res.data };
      });
    })
  );
};
export const editVocab = actions$ => {
  return actions$.pipe(
    filter(action => action.type === EDIT_VOCAB),
    mergeMap(action => {
      return VocabFetcher.editVocab(action.payload).then(res => {
        return { type: EDIT_VOCAB_DONE, payload: res };
      });
    })
  );
};
export const deleteVocab = actions$ => {
  return actions$.pipe(
    filter(action => action.type === DELETE_VOCAB),
    mergeMap(action => {
      return VocabFetcher.deleteVocab(action.payload).then(res => {
        return { type: DELETE_VOCAB_DONE, payload: res };
      });
    })
  );
};
