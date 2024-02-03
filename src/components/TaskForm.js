import React, { useState, useEffect } from 'react';
import './styles/TaskForm.css';

const TaskForm = ({ handleTaskFormSubmit, handleTaskFormCancel, stages }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  useEffect(() => {
    if (stages.length > 0) {
      setSelectedStage(stages[0].stageName);
    }
  }, [stages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("task name "+taskName+" stage "+selectedStage);
    handleTaskFormSubmit({ taskName, taskDescription, endDate, selectedStage });
    setTaskName('');
    setTaskDescription('');
    setEndDate('');
    setSelectedStage('');
  };

  return (
    <div className='task-form-container'>
      <h2>Task Form</h2>
      <form className='task-form' onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} className='task-input' onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <br />
        <label>
          Task Description:
          <textarea value={taskDescription} className='task-desc' onChange={(e) => setTaskDescription(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} className='task-date' onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <label>
          Stage:
          <select
            value={selectedStage} className='task-select'
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
