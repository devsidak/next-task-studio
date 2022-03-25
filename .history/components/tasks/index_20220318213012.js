import styles from '../../styles/tasks/index.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Index({task, loading, setLoading, removeTodo}) {

  console.log('task - ', task);
  return (
    <li className={styles.task + ' p-9 m-4 '}>
        <div className={''}>
            <input className={styles.checkbox} type="checkbox" />
        </div>
        <div>
            <p>{task.task}</p>
        </div>
        <div className={styles.taskButtonBox }>
            <button dis><EditIcon /></button>
            <button onClick={()=>{removeTodo(task.id)}}><DeleteIcon /></button>
        </div>
    </li>
  )
}

export default Index;