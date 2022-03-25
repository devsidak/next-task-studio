import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import styles from '../styles/Home.module.css'

function Home(props) {
  console.log("Home props - ", props)
  const { name, setInfo } = props
  const [newName, setName] = useState("");

  return (
    <div className={styles.container}>
      <h1>Enter a Name <span style={{color:"red"}}>{name}</span></h1>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setName(e.target.value)}>

        </input>
        <button onClick={() => setInfo(newName)}>
          Submit
        </button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("name - ", state.main.name)
 return { name: state.main.name }
}

const mapDispatchToProps = {
  setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
