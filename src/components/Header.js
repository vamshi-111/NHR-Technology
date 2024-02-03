import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import StageForm from './StageForm';
import DisplayTasks from './TaskBoard';
import './styles/Header.css';

function Header() {
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [stageFormVisible, setStageFormVisible] = useState(false);
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [stages, setStages] = useState(() => JSON.parse(localStorage.getItem('stages')) || []);

  const handleTaskButtonClick = () => {
    //const uniqueStages = [...new Set(stages.map((stage) => stage.taskName))];

    setTaskFormVisible(true);
    setStageFormVisible(false);
    // setUniqueStages(uniqueStages);
    // console.log(uniqueStages + "sds");
  };

  const handleStageButtonClick = () => {
    setTaskFormVisible(false);
    setStageFormVisible(true);
  };

  const handleTaskFormSubmit = (taskData) => {
    const updatedTasks = [...tasks, taskData];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskFormVisible(false);
  };

  const handleStageFormSubmit = (stageData) => {
    const updatedStages = [...stages, stageData];
    setStages(updatedStages);
    localStorage.setItem('stages', JSON.stringify(updatedStages));
    setStageFormVisible(false);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('stages', JSON.stringify(stages));
  }, [stages]);

  return (
    <div>
      <header>
        <div>
          <h1>Jira Replica</h1>
          <hr />
          <div style={{ textAlign: "right"}}>
            <button onClick={handleTaskButtonClick}>Task</button>
            <button onClick={handleStageButtonClick}>Stage</button>
          </div>
        </div>
      </header>
      {taskFormVisible && <TaskForm handleTaskFormSubmit={handleTaskFormSubmit} handleTaskFormCancel={() => setTaskFormVisible(false)} stages = {stages}/>}
      {stageFormVisible && <StageForm handleStageFormSubmit={handleStageFormSubmit} handleStageFormCancel={() => setStageFormVisible(false)} />}
      {/* 
      //Can be used to display stages and tasks in a bulleted list format
      <div>
        <div>
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>Task Name: {task.taskName} Task Description: {task.taskDescription} Task EndDate: {task.endDate} Task Stage: {task.selectedStage}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Stages:</h2>
          <ul>
            {stages.map((stage, index) => (
              <li key={index}>Stage name: {stage.stageName} with stage description {stage.stageDescription}</li>
            ))}
          </ul>
        </div>
      </div> */}
      <DisplayTasks tasks = {tasks}/>
    </div>
  );
}

export default Header;