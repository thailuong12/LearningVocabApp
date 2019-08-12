import {
    GET_WRITINGS_DONE,
    ADD_WRITING_DONE,
    DELETE_WRITING_DONE,
    EDIT_WRITING_DONE,
    GET_WRITING_BY_ID_DONE
  } from "../Actions/Writing/WritingActionContants";
  import { filter, map } from "lodash/fp";
  const initialState = {
    writingList: [],
    currentWriting : {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_WRITINGS_DONE:
        return {
          ...state,
          writingList: action.payload
         
        };
        case GET_WRITING_BY_ID_DONE:
          return {
            ...state,
            currentWriting: action.payload
          };
      case ADD_WRITING_DONE:
        return {
          ...state,
          writingList: [...state.writingList, action.payload],
        };
      case DELETE_WRITING_DONE:
        return {
          ...state,
          writingList: filter(v => v.id !== action.payload.id, state.writingList),
        };
      case EDIT_WRITING_DONE:

  
        return {
          ...state,
          writingList: map(writing => {
            return writing.id === action.payload.writing.id ? action.payload.writing : writing;
          }, state.writingList),
        
        };
  
      default:
        return state;
    }
  };
  