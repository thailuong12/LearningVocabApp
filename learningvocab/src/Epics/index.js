import { getAllVocab, addVocab, deleteVocab, editVocab } from "./VocabEpics";
import {
  getAllWriting,
  addWriting,
  deleteWriting,
  editWriting,
  getWritingById
} from "./WritingEpics";

import { combineEpics } from "redux-observable";
export default combineEpics(
  getAllVocab,
  addVocab,
  deleteVocab,
  editVocab,
  getAllWriting,
  addWriting,
  deleteWriting,
  editWriting,
  getWritingById
);
