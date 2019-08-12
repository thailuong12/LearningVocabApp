import {
  GET_WRITINGS,
  ADD_WRITING,
  EDIT_WRITING,
  DELETE_WRITING,
  GET_WRITING_BY_ID
} from "./WritingActionContants";

export const getWritings = () => ({
  type: GET_WRITINGS
});

export const getWritingById = id => ({ type: GET_WRITING_BY_ID, payload: id });
export const addWriting = data => ({ type: ADD_WRITING, payload: data });
export const editWriting = data => ({
  type: EDIT_WRITING,
  payload: data
});
export const deleteWriting = data => ({ type: DELETE_WRITING, payload: data });
