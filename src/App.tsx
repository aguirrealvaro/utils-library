import React, { FunctionComponent } from "react";
import { Modal, useModal } from "./components/Modal";

export const App: FunctionComponent = () => {
  const { show, onClose, onOpen } = useModal();

  return (
    <>
      <button onClick={onOpen}>Open modal</button>
      <Modal show={show} onClose={onClose}>
        Molda!!
      </Modal>
    </>
  );
};
