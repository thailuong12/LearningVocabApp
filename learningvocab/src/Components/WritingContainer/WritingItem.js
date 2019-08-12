import React from "react";
import { Button, Card } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const WritingItem = props => {
  const { match, history, topic, id, totalWords } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{topic}</Card.Header>
        <Card.Meta>Total Words: {totalWords}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => {
              history.push(`${match.url}/${id}`);
            }}
          >
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       getWritingsById
//     },
//     dispatch
//   );

export default WritingItem;
