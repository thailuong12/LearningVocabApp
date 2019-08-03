import React, { useEffect, useState } from "react";
import Topic from "./Topics/Topic";
import { map } from "lodash/fp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddTopicModal from "./AddTopic/AddTopicPopup";
import AddTopic from "./AddTopic/AddTopicBody";
import { getTopics, addTopic } from "../../Actions/Topic/TopicActions";
const TopicsContainer = props => {
  const { getTopicsAction, topics, addTopicAction } = props;

  useEffect(() => {
    getTopicsAction();
  }, {});

  return (
    <div className="TopicsContainer">
      {map(topic => {
        return <Topic key={topic.id} {...topic} />;
      }, topics)}

      <AddTopicModal
        header="Add A Topic"
        buttonName="Add New Topic"
        saveAction={addTopicAction}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  topics: state.topics.topicList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTopicsAction: getTopics,
      addTopicAction: addTopic
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsContainer);
