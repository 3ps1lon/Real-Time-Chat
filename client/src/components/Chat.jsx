import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom'
import styles from '../styles/Chat.modules.css'


const socket = io.connect('http://localhost:5000')

const Chat = () => {
  const [state, setState] = useState([])
  const { search } = useLocation()
  const [params, setParams] = useState(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search))
    setParams(searchParams)
    socket.emit('join', searchParams)
  }, [search])

  useEffect(() => {
    socket.on('message', ({ data }) => {
      setState((_state) => [..._state, data])
    })
  }, [])

  const leftRoom = () => {

  }
  const handleChange = () => {

  }
console.log(params)
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.title}>
          {params.room}
        </div>
        <div className={styles.users}>
          0 users in this room
        </div>
        <button className={styles.left} onClick={leftRoom}>
          Left the room
        </button>
      </div>
      <div className={styles.messages}>
        {state.map(({ message }) => <span>{message}</span>)}
      </div>

      <form className={styles.form}>
        <div className={styles.group}>
          <input className={styles.input}
            name='message'
            placeholder='What do you want to say??'
            type="text"
            value={message}
            onChange={handleChange}
            autoComplete='off'
            required
          />
        </div>
      </form>
    </div>
  )
}

export default Chat