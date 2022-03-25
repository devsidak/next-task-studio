import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../../../tasks';

function FourthRow() {
  const tasks = useSelector((state) => state.main.todos);
  const renderTasks = () => {
    tasks?.
  }
  return (
    <div>

    </div>
  )
}

export default FourthRow;