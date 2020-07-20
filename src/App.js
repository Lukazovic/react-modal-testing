import React, { useState } from 'react';

import ConfirmModal from './ConfirmModal';

import './App.css';

function App() {
  const [test, setTest] = useState(false);
  const [showingModal, setShowingModal] = useState(false);

  const lorem =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique atsit, laborum sapiente quos velit laudantium omnis molestiae repellatrecusandae sunt ad neque ipsam possimus saepe eius aperiam veniammolestias.';

  const closeModal = () => {
    setShowingModal(false);
  };

  const thruthyResponse = () => {
    setTest(!test);
    closeModal();
  };

  return (
    <div className="sample">
      <h1>{test.toString()}</h1>
      <button
        onClick={() => {
          setShowingModal(true);
        }}
      >
        Click me
      </button>

      <ConfirmModal
        title={'Change State?'}
        content={lorem}
        thruthyResponse={thruthyResponse}
        closeModal={closeModal}
        showingModal={showingModal}
      />
    </div>
  );
}

export default App;
