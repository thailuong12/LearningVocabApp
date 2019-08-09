import React from "react";
import { Input } from "semantic-ui-react";
const AddTopicPopupBody = handleInputChangeByKey => {
  const handleChange = e => {
    const { name: key, value } = e.target;
    handleInputChangeByKey(key, value);
  };
  return (
    <div className="Topic_AddContainer">
      <div className="Topic_inputRow">
        <label>Name :</label>
        <Input placeholder="Name.." onChange={handleChange} name="nameValue" />
      </div>
      <div className="Topic_inputRow">
        <label>Type :</label>
        <Input
          placeholder="Type of word.."
          onChange={handleChange}
          name="typeValue"
        />
      </div>
      <div className="Topic_inputRow">
        <label>Pronunciation :</label>
        <Input
          placeholder="Pronunciation.."
          onChange={handleChange}
          name="pronunciationValue"
        />
      </div>
      <div className="Topic_inputRow">
        <label>Description :</label>
        <Input
          placeholder="Description.."
          onChange={handleChange}
          name="descriptionValue"
        />
      </div>
      <div className="Topic_inputRow">
        <label>Example :</label>
        <Input
          placeholder="Example.."
          onChange={handleChange}
          name="exampleValue"
        />
      </div>
    </div>
  );
};

export default AddTopicPopupBody;
