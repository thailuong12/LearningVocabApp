import React, { useState } from "react";
import AddTopicPopupBody from './AddTopicPopupBody';
import { Button, Header, Modal } from "semantic-ui-react";


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
