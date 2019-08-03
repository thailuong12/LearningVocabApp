import React from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";

const CommonModal = props => {
  const { header, body, buttonName, saveAction } = props;
  return (
    <Modal trigger={<Button>{buttonName}</Button>}>
      <Header content={header} />
      <Modal.Content>{body}</Modal.Content>
      <Modal.Actions>
        <Button color="red" inverted onClick={saveAction}>
          OK
        </Button>
        <Button color="green" inverted>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CommonModal;
