import React, { useEffect } from "react";
import Topic from "./Topics/Topic";
import { map } from "lodash/fp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddTopicModal from "./AddTopic/AddTopicPopup";
import {
  getTopics,
  addTopic,
  editTopic,
  deleteTopic
} from "../../Actions/Topic/TopicActions";
const TopicsContainer = props => {
  const {
    getTopicsAction,
    topics,
    addTopicAction,
    editTopicAction,
    deleteTopicAction
  } = props;

  useEffect(() => {
    getTopicsAction();
  }, {});

  return (
    <React.Fragment>
      <div className="TopicsContainer">
        {map(topic => {
          return (
            <Topic
              key={topic.id}
              {...topic}
              deleteTopicAction={deleteTopicAction}
              editTopicAction={editTopicAction}
            />
          );
        }, topics)}
      </div>
      <AddTopicModal
        header="Vocabulary"
        buttonName="Add New Vocab"
        saveAction={addTopicAction}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  topics: state.topics.topicList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTopicsAction: getTopics,
      addTopicAction: addTopic,
      deleteTopicAction: deleteTopic,
      editTopicAction: editTopic
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsContainer);
