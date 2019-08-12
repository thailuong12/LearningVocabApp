import React, { useEffect } from "react";
import Vocab from "./Vocabs/Vocab";
import { map } from "lodash/fp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddVocabModal from "./AddVocab/AddVocabPopup";
import { filter } from "lodash/fp";
import { Message } from "semantic-ui-react";
import {
  getVocabs,
  addVocab,
  editVocab,
  deleteVocab
} from "../../Actions/Vocab/VocabActions";
const VocabsContainer = props => {
  const {
    getVocabsAction,
    vocabs,
    addVocabAction,
    editVocabAction,
    deleteVocabAction,
    isLearning
  } = props;

  useEffect(() => {
    getVocabsAction();
  }, {});
  const filteredVocabs = filter(
    vocab => vocab.isLearning === isLearning,
    vocabs
  );

  const renderNotHaveWord = () => {
    let message = isLearning
      ? "You have learned anything :)"
      : "You have not learned any word yet :)";
    return <Message icon="inbox" header={message} />;
  };
  return filteredVocabs.length === 0 ? (
    renderNotHaveWord()
  ) : (
    <React.Fragment>
      <div className="VocabsContainer">
        {map(vocab => {
          return (
            <Vocab
              key={vocab.id}
              {...vocab}
              deleteVocabAction={deleteVocabAction}
              editVocabAction={editVocabAction}
            />
          );
        }, filteredVocabs)}
      </div>
      {isLearning && (
        <AddVocabModal
          header="Vocabulary"
          buttonName="Add New Vocab"
          saveAction={addVocabAction}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  vocabs: state.vocabs.vocabList,
  VocabsLength: state.vocabs.vocabListLength
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getVocabsAction: getVocabs,
      addVocabAction: addVocab,
      deleteVocabAction: deleteVocab,
      editVocabAction: editVocab
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabsContainer);
