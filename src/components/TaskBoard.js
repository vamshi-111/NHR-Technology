import React from 'react';

const TaskBoard = ({ tasks }) => {
  // Extract unique stages from tasks
  const stages = [...new Set(tasks.map((task) => task.selectedStage))];

  console.log("stages "+stages);

  return (
    <div>
      <h2>Task Table</h2>
      <table border="1">
        <thead>
          <tr>
            {/* Create a column for each stage */}
            {stages.map((stageName) => (
              <th key={stageName}>{stageName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Iterate over tasks */}
          {tasks.map((task) => (
            <tr key={task.taskName}>
              {/* Create cells for each stage */}
              {stages.map((stageName) => (
                <td key={stageName}>
                  {/* Display 'X' if the task is associated with the current stage, otherwise empty */}
                  {task.selectedStage === stageName ? task.taskName : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskBoard;
