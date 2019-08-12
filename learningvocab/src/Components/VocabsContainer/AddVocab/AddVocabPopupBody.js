import React from "react";
import { Input } from "semantic-ui-react";
const AddVocabPopupBody = handleInputChangeByKey => {
  const handleChange = e => {
    const { name: key, value } = e.target;
    handleInputChangeByKey(key, value);
  };
  return (
    <div className="Vocab_AddContainer">
      <div className="Vocab_inputRow">
        <label>Name :</label>
        <Input placeholder="Name.." onChange={handleChange} name="nameValue" />
      </div>
      <div className="Vocab_inputRow">
        <label>Type :</label>
        <Input
          placeholder="Type of word.."
          onChange={handleChange}
          name="typeValue"
        />
      </div>
      <div className="Vocab_inputRow">
        <label>Pronunciation :</label>
        <Input
          placeholder="Pronunciation.."
          onChange={handleChange}
          name="pronunciationValue"
        />
      </div>
      <div className="Vocab_inputRow">
        <label>Description :</label>
        <Input
          placeholder="Description.."
          onChange={handleChange}
          name="descriptionValue"
        />
      </div>
      <div className="Vocab_inputRow">
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

export default AddVocabPopupBody;
