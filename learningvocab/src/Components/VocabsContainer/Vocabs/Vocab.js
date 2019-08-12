import React from "react";
import { Card, Button } from "semantic-ui-react";

const Vocab = props => {
  const {
    name,
    description,
    type,
    pronunciation,
    deleteVocabAction,
    editVocabAction,
    example,
    isMarked,
    id,
    isLearning
  } = props;
  const backgroundColor = isMarked ? "orange" : "white";
  let isLearningProps = {};

  const getIslearningProps = () => {
    if (isLearning) {
      isLearningProps.buttonClassName = "Vocab_Button Remember";
      isLearningProps.buttonName = "Got it!";
      isLearningProps.buttonColor = "green";
    } else {
      isLearningProps.buttonClassName = "Vocab_Button NotRemember";
      isLearningProps.buttonName = "Forgot it!";
      isLearningProps.buttonColor = "red";
    }
  };
  getIslearningProps();
  return (
    <div className="Vocab_Item">
      <Card style={{ backgroundColor }}>
        <Card.Content>
          <Card.Header className="Vocab_Header">{name}</Card.Header>
          <Card.Meta>{type}</Card.Meta>
          <Card.Meta>{pronunciation}</Card.Meta>
        </Card.Content>
        <Card.Content description={description} />
        <Card.Content description={example} />
        <Card.Content extra>
          <div className="ui two buttons">
            {isLearning && (
              <Button
                basic
                color="green"
                onClick={() => editVocabAction(id, true, false)}
              >
                {isMarked ? "UnMark" : "Mark"}
              </Button>
            )}
            {!isLearning && (
              <Button basic color="red" onClick={() => deleteVocabAction(id)}>
                Delete
              </Button>
            )}
          </div>
          <div>
            <Button
              className={isLearningProps.buttonClassName}
              basic
              color={isLearningProps.buttonColor}
              onClick={() => editVocabAction(id, false, true)}
            >
              {isLearningProps.buttonName}
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Vocab;
