import React, { useState } from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";
import { isEmpty } from "lodash/fp";
import validate from "validate.js";
const AddTopicPopupBody = (
  setNameValue,
  setDescriptionValue,
  setNameError,
  nameError,
  setDescriptioError,
  descriptionValue
) => {
  const vaidateInput = inputvalue => {
    const constraints = {
      inputvalue: {
        presence: true,
        length: {
          minimum: 1
        }
      }
    };
    return validate({ inputvalue }, constraints);
  };
  const handleNameValueChange = e => {
    const value = e.target.value;
    const isValueValid = vaidateInput(value);
    if (!isEmpty(isValueValid)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setNameValue(value);
  };
  const handleDescriptionValueChange = e => {
    const value = e.target.value;
    setDescriptionValue(value);
  };
  return (
    <div className="Topic_AddContainer">
      <div className="Topic_inputRow">
        <label>Name :</label>
        <Input
          placeholder="Name.."
          onChange={handleNameValueChange}
          error={nameError}
        />
      </div>
      <div className="Topic_inputRow">
        <label>Description :</label>
        <Input
          placeholder="Description.."
          onChange={handleDescriptionValueChange}
        />
      </div>
    </div>
  );
};

const CommonModal = props => {
  const { header, buttonName, saveAction } = props;
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [descriptioError, setDescriptioError] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleSave = () => {
    console.log("error", nameError);
    // saveAction({ name: nameValue, description: descriptionValue });
    // setModalOpen(false);
  };
  const handleInputChangeByKey = () => {};
  return (
    <Modal
      trigger={<Button onClick={() => setModalOpen(true)}>{buttonName}</Button>}
      open={modalOpen}
    >
      <Header content={header} />
      <Modal.Content>
        {AddTopicPopupBody(
          setNameValue,
          setDescriptionValue,
          setNameError,
          nameError,
          setDescriptioError,
          descriptioError
        )}
      </Modal.Content>
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
