import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

export default function Modals({children,title,openModal,onClose,onSubmit}) {
  return (
    <Modal
      show={openModal === true}
      onClose={() => onClose(false)}
    >
      <Modal.Header className="child:ml-0 font-MorabbaMedium">
        {title}
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer className="flex gap-2 items-center justify-end">
        <Button
          onClick={() => onSubmit()}
          className="bg-orange-400"
        >
          ثبت
        </Button>
        <Button color="gray" onClick={() => onClose(false)}>
          لغو
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
