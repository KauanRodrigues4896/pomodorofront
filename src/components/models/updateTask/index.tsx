import { OpenModalButton } from '@/components/Buttons/ModalButton';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { UpdateModalContainer } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function UpdateModal() { 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <UpdateModalContainer>
      <OpenModalButton OpenModal={openModal} label='Editar'/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Update</h1>
      </Modal>
    </UpdateModalContainer>
  );
}