import React, { useState } from 'react';

const TaskForm = ({ handleTaskFormSubmit, handleTaskFormCancel, stages }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTaskFormSubmit({ taskName, taskDescription, endDate, selectedStage });
    setTaskName('');
    setTaskDescription('');
    setEndDate('');
    setSelectedStage('');
  };

  return (
    <div>
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <br />
        <label>
          Task Description:
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <label>
          Stage:
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
          >
            {/* Map over the stages array and extract names */}
            {stages.map((stage) => (
              <option key={stage.stageName} value={stage.stageName}>
                {stage.stageName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleTaskFormCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
