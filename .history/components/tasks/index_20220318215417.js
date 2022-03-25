import styles from '../../styles/tasks/index.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

function Index({task, loading, setLoading, removeTodo}) {

  const [check, setCheck] = React.useState(false);

  const handleCompleteUncompleteTask = (e) => {
    const nextStateTask  = {...task, completed: e.target.checked};
    console.log(nextStateTask)
  }

  return (
    <li className={styles.task + ' p-9 m-4 '}>
        <div className={''}>
            <input disabled={loading} onChange={handleCompleteUncompleteTask} checked={check} className={styles.checkbox} type="checkbox" />
        </div>
        <div>
            <p>{task.task}</p>
        </div>
        <div className={styles.taskButtonBox }>
            <button disabled={loading}><EditIcon /></button>
            <button disabled={loading} onClick={()=>{removeTodo(task.id)}}><DeleteIcon /></button>
        </div>
    </li>
  )
}

export default Index;