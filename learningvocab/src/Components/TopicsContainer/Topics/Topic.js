import React from "react";
import { Card, Button, Accordion, Icon } from "semantic-ui-react";

const Topic = props => {
  const {
    name,
    description,
    type,
    pronunciation,
    deleteTopicAction,
    editTopicAction,
    example,
    id
  } = props;
  const state = { activeIndex: 0 };

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;

    state.activeIndex = newIndex;
  };
 // const { activeIndex } = state;

  return (
    <div className="Topic_Item">
      <Card>
        <Card.Content>
          <Card.Header className="Vocab_Header">{name}</Card.Header>
          <Card.Meta>{type}</Card.Meta>
          <Card.Meta>{pronunciation}</Card.Meta>
        </Card.Content>
        <Card.Content description={description} />
        <Card.Content description={example} />
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={() => editTopicAction}>
              Edit
            </Button>
            <Button basic color="red" onClick={() => deleteTopicAction(id)}>
              Delete
            </Button>
          </div>
        </Card.Content>

      </Card>
    </div>
  );
};

export default Topic;
