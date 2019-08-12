import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, TextArea, Button, Label, Icon } from "semantic-ui-react";
import { getWritingById } from "../../Actions/Writing/WritingActions";
import {
  getWritings,
  addWriting,
  editWriting,
  deleteWriting
} from "../../Actions/Writing/WritingActions";
const WritingContent = props => {
  const {
    match,
    getWritingById,
    currentWriting,
    currentWriting: { topic, content, totalWords },
    editWritingAction
  } = props;
  const id = match.params.writingId;
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [writingTopic, setWritingTopic] = useState("");
  const [writingContent, setWritingContent] = useState("");
  const handleContentChange = e => {
    setNumberOfWords(e.target.value.trim().split(" ").length);
    setWritingContent(e.target.value);
  };
  const handleTopicChange = e => {
    setWritingTopic(e.target.value);
  };
  const handleSaveAction = () => {
    editWritingAction({
      topic: writingTopic,
      content: writingContent,
      totalWords: numberOfWords,
      id
    });
  };
  useEffect(() => {
    getWritingById(id);
  }, {});
  useEffect(() => {
    setNumberOfWords(totalWords);
    setWritingContent(content);
    setWritingTopic(topic);
  }, [currentWriting]);
  return (
    <div className="WritingContent">
      <Form className="WritingContent_Body">
        <Form.Field>
          <label>Topic</label>
          <input
            placeholder="Topic..."
            value={writingTopic}
            onChange={e => handleTopicChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Content</label>
          <TextArea
            placeholder="Your Essay..."
            style={{ minHeight: 400 }}
            onChange={e => handleContentChange(e)}
            value={writingContent}
          />
        </Form.Field>
        <Form.Field>
          <label>Total Words</label>
          <Label>
            <Icon name="file word" /> {numberOfWords}
          </Label>
        </Form.Field>
      </Form>
      <Button color="green" onClick={() => handleSaveAction()}>
        Save
      </Button>
      <Button color="red">Cancel</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  currentWriting: state.writings.currentWriting
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWritingById,
      editWritingAction: editWriting
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WritingContent);
