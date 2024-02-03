import React, { useState } from 'react';
import './styles/StageForm.css'

const StageForm = ({ handleStageFormSubmit, handleStageFormCancel }) => {
  const [stageName, setStageName] = useState('');
  const [stageDescription, setStageDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleStageFormSubmit({ stageName, stageDescription });
    setStageName('');
    setStageDescription('');
  };

  return (
    <div className='stage-form-container'>
      <h2>Stage Form</h2>
      <form className='stage-form' onSubmit={handleSubmit}>
        <label>
          Stage Name:
          <input type="text" value={stageName} className='stage-name' onChange={(e) => setStageName(e.target.value)} />
        </label>
        <br />
        <label>
          Stage Description:
          <textarea value={stageDescription} className='stage-desc' onChange={(e) => setStageDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleStageFormCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default StageForm;
