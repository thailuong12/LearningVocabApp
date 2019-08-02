import React from "react";
import { Card } from "semantic-ui-react";

const Topic = props => {
  const { name, description } = props;
  return (
    <Card className="Topic">
      <Card.Content>
        <div className="Topic_Name"> {name} </div>
      </Card.Content>
      <Card.Description>
        <div className="Topic_Discription"> {description} </div>
      </Card.Description>
    </Card>
  );
};

export default Topic;
