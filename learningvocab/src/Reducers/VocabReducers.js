import {
  GET_VOCABS_DONE,
  ADD_VOCAB_DONE,
  DELETE_VOCAB_DONE,
  EDIT_VOCAB_DONE
} from "../Actions/Vocab/VocabActionContants";
import { filter, map } from "lodash/fp";
const initialState = {
  vocabList: [],
  learningListLength: 0,
  learnedListLength: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VOCABS_DONE:
      return {
        ...state,
        vocabList: action.payload,
        learningListLength: filter(t => t.isLearning === true, action.payload)
          .length,
        learnedListLength: filter(t => t.isLearning === false, action.payload)
          .length
      };
    case ADD_VOCAB_DONE:
      return {
        ...state,
        vocabList: [...state.vocabList, action.payload],
        learningListLength: state.learningListLength + 1
      };
    case DELETE_VOCAB_DONE:
      return {
        ...state,
        vocabList: filter(v => v.id !== action.payload.id, state.vocabList),
        learnedListLength: state.learnedListLength - 1
      };
    case EDIT_VOCAB_DONE:
      let newLearningLength = state.learningListLength;
      let newLearnedLength = state.learnedListLength;

      if (action.payload.changeLearningState) {
        if (action.payload.changeToLearning) {
          newLearningLength = newLearningLength + 1;
          newLearnedLength = newLearnedLength - 1;

        } else {
          newLearnedLength = newLearnedLength + 1;
          newLearningLength = newLearningLength  - 1;

        }
      }

      return {
        ...state,
        vocabList: map(vocab => {
          return vocab.id === action.payload.vocab.id ? action.payload.vocab : vocab;
        }, state.vocabList),
        learningListLength: newLearningLength,
        learnedListLength: newLearnedLength
      };

    default:
      return state;
  }
};
