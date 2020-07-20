import React from 'react';

import './ConfirmModal.css';

function ConfirmModal({
  title,
  content,
  thruthyResponse,
  closeModal,
  showingModal,
}) {
  return (
    <div className={`modal-overlay ${showingModal && 'active'}`}>
      <div className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="modal-buttons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="confirm" onClick={thruthyResponse}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
