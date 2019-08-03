import React from "react";
import { Input } from "semantic-ui-react";

const AddTopic = () => {
  return (
    <div className="Topic_AddContainer">
      <div className="Topic_inputRow">
        <label>Name :</label>
        <Input placeholder="Name.." />
      </div>
      <div className="Topic_inputRow">
        <label>Description :</label>
        <Input placeholder="Description.." />
      </div>
    </div>
  );
};

export default AddTopic();
