import React, { useState } from 'react';
import TaskForm from './TaskForm';
import StageForm from './StageForm';
import DisplayTasks from './TaskBoard';
import './styles/Header.css';

function Header() {
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [stageFormVisible, setStageFormVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [stages, setStages] = useState([]);
  //const [uniqueStages, setUniqueStages] = useState([]);

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
    setTasks([...tasks, taskData]);
    setTaskFormVisible(false);
  };

  const handleStageFormSubmit = (stageData) => {
    setStages([...stages, stageData]);
    setStageFormVisible(false);
  };

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
      {/* <div>
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
              <li key={index}>{stage.stageName} - {stage.stageDescription}</li>
            ))}
          </ul>
        </div>
      </div> */}
      <DisplayTasks tasks = {tasks}/>
    </div>
  );
}

export default Header;