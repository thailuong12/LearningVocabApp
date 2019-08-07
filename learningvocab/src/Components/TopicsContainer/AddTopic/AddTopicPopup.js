import React, { useState } from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";
import { isEmpty } from "lodash/fp";
import validate from "validate.js";
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

const CommonModal = props => {
  const { header, buttonName, saveAction } = props;

  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [pronunciationValue, setPronunciationValue] = useState("");
  const [exampleValue, setExampleValue] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const handleSave = () => {
    saveAction({
      name: nameValue,
      pronunciation: pronunciationValue,
      description: descriptionValue,
      type: typeValue,
      example: exampleValue
    });
    setModalOpen(false);
  };
  const handleInputChangeByKey = (key, value) => {
    switch (key) {
      case "nameValue":
        return setNameValue(value);
      case "typeValue":
        return setTypeValue(value);
      case "pronunciationValue":
        return setPronunciationValue(value);
      case "descriptionValue":
        return setDescriptionValue(value);
      case "exampleValue":
        return setExampleValue(value);
      default:
        break;
    }
  };
  return (
    <Modal
      trigger={<Button onClick={() => setModalOpen(true)}>{buttonName}</Button>}
      open={modalOpen}
    >
      <Header content={header} />
      <Modal.Content>{AddTopicPopupBody(handleInputChangeByKey)}</Modal.Content>
      <Modal.Actions>
        <Button color="red" inverted onClick={handleSave}>
          OK
        </Button>
        <Button color="green" inverted onClick={() => setModalOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CommonModal;
