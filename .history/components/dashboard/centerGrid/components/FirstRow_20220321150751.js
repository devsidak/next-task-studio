import React from 'react'
import styles from '../../../../styles/dashboard/main.module.css'


function FirstRow() {
  return (
    <div className={styles.FirstRowContainer}>
        <div>
            <h2 className={'text-3xl md:text-4xl'}>Good Morning 🌤</h2>
        </div>

        <div>
            <button className={styles.Button + ' py-1 px-3 border-0 rounded-lg text-md '  }>
                + Add Task
            </button>
        </div>
    </div>
  )
}

export default FirstRow