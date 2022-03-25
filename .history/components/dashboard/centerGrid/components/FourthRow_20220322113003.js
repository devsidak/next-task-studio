import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../../../tasks';

function FourthRow() {
  const tasks = useSelector((state) => state.main.todos);
  const renderTasks = () => {
    tasks?.map((task, index) => {
      return <Task key={task.id} task={task} />;
    }
    
  }
  return (
    <div>

    </div>
  )
}

export default FourthRow;