import React from "react";
import Topic from "./Topics/Topic";
import { map } from "lodash/fp";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CommonModal from "../common/Modal";
import AddTopic from "./AddTopic/AddTopic";
import { getTopics } from "../../Actions/Topic/TopicActions";
const TopicsContainer = props => {
  const { getTopics, topics } = props;
  // const topics = [
  //   {
  //     name: "Education",
  //     discription: "about schooling stuffs"
  //   },
  //   {
  //     name: "Society",
  //     discription: "about social life, activities"
  //   }
  // ];

  function act() {
    getTopics();
  }
  return (
    <div className="TopicsContainer">
      {map(topic => {
        return <Topic key={topic.id} {...topic} />;
      }, topics)}

      <CommonModal
        header="Add A Topic"
        buttonName="Add New Topic"
        body={AddTopic}
      />
      <button onClick={act} />
    </div>
  );
};

const mapStateToProps = state => ({
  topics: state.topics.topicList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTopics
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsContainer);
