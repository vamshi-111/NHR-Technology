import React, { useState } from 'react';
import TaskForm from './TaskForm';
import StageForm from './StageForm';
import DisplayTasks from './TaskBoard';

function Header() {
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [stageFormVisible, setStageFormVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [stages, setStages] = useState([]);

  const handleTaskButtonClick = () => {
    setTaskFormVisible(true);
    setStageFormVisible(false);
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
              <li key={index}>{stage.stageName} - {stage.stageDescription}</li>
            ))}
          </ul>
        </div>
      </div>
      <DisplayTasks tasks = {tasks}/>
    </div>
  );
}

// const TaskForm = ({ onSubmit, onCancel }) => {
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ taskName, taskDescription, endDate });
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Task Name:
//             <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
//           </label>
//           <label>
//             Task Description:
//             <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
//           </label>
//           <label>
//             End Date:
//             <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//           </label>
//           <div>
//             <button type="submit">Submit Task</button>
//             <button type="button" onClick={onCancel}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const StageForm = ({ onSubmit, onCancel }) => {
//   const [stageName, setStageName] = useState('');
//   const [stageDescription, setStageDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ stageName, stageDescription });
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Stage Name:
//             <input type="text" value={stageName} onChange={(e) => setStageName(e.target.value)} />
//           </label>
//           <label>
//             Stage Description:
//             <textarea value={stageDescription} onChange={(e) => setStageDescription(e.target.value)} />
//           </label>
//           <div>
//             <button type="submit">Submit Stage</button>
//             <button type="button" onClick={onCancel}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export default Header;
