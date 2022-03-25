import styles from '../../styles/tasks/index.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Index({task, loading, setLoading, removeTodo}) {


  const handleCompleteUncompleteTask = (e) => {
    console.log(e.targ)
  }

  return (
    <li className={styles.task + ' p-9 m-4 '}>
        <div className={''}>
            <input disabled={loading} onChange={handleCompleteUncompleteTask} className={styles.checkbox} type="checkbox" />
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