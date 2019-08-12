import {
  GET_VOCABS,
  ADD_VOCAB,
  EDIT_VOCAB,
  DELETE_VOCAB
} from "./VocabActionContants";

export const getVocabs = () => ({
  type: GET_VOCABS
});
export const addVocab = data => ({ type: ADD_VOCAB, payload: data });
export const editVocab = (id, isChangeMarked, isChangeLearning) => ({
  type: EDIT_VOCAB,
  payload: { id, isChangeMarked, isChangeLearning }
});
export const deleteVocab = data => ({ type: DELETE_VOCAB, payload: data });
