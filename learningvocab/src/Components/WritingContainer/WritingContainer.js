import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { map } from "lodash/fp";
import WritingItem from "./WritingItem";
import {
  getWritings,
  addWriting,
  editWriting,
  deleteWriting
} from "../../Actions/Writing/WritingActions";
const WritingContainer = props => {
  const { writings, getWritingsAction, history, match } = props;
  useEffect(() => {
    getWritingsAction();
  }, {});
  return (
    <div className="WrtingContainer">
      {map(writing => {
        return <WritingItem {...writing} history={history} match={match} />;
      }, writings)}
    </div>
  );
};

const mapStateToProps = state => ({
  writings: state.writings.writingList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWritingsAction: getWritings,
      addWritingAction: addWriting,
      deleteWritingAction: deleteWriting,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WritingContainer);
