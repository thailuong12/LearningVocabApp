import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const CommonModal = props => {
  const { header, body, buttonName } = props;
  return (
    <Modal
      trigger={<Button>{buttonName}</Button>}
      header={header}
      content={body}
      actions={["Snooze", { key: "done1", content: "Done", positive: true }]}
    />
  );
};

export default CommonModal;
