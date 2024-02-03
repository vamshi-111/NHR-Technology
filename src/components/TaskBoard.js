import React from 'react';
import './styles/TaskBoard.css'; // Import the CSS file

const TaskBoard = ({ tasks }) => {
  // Extract unique stages from tasks
  const stages = [...new Set(tasks.map((task) => task.selectedStage))];

  console.log("stages "+stages);

  const isTaskOverdue = (endDate) => {
    const currentDate = new Date();
    const dueDate = new Date(endDate);
    return currentDate > dueDate;
  };

  return (
    <div className="task-board-container">
      <h2>Task Table</h2>
      <table className="task-table">
        <thead>
          <tr>
            {/* Create a column for each stage */}
            {stages.map((stageName) => (
              <th key={stageName}>{stageName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        <tr>
            {stages.map((stage) => (
              <td key={stage}>
                {tasks
                  .filter((task) => task.selectedStage === stage)
                  .map((task) => (
                    <div key={task.taskName} className="task-card">
                      <div className="task-name">{task.taskName}</div>
                      {isTaskOverdue(task.endDate) && <div className="due-label">Due</div>}
                    </div>
                  ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskBoard;
