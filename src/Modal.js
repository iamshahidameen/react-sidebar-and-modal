import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppProvider, AppContext, useGlobalContext } from './context';
const Modal = () => {
  const { isModal, setIsModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModal && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={() => setIsModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
