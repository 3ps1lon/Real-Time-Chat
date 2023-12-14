import React, { useState } from 'react'
import styles from '../styles/Main.module.css'
import { Link } from 'react-router-dom'

const FIELDS = {
    USERNAME: 'username',
    ROOM: 'room'
}

const Main = () => {
    const {USERNAME, ROOM} = FIELDS
    const [values, setValues] = useState({[USERNAME]: '', [ROOM]: ''})

    const handleChange = ({target: {value, name }}) => {
        setValues({...values, [name]: value})
    }

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some(value => !value)

        if (isDisabled) e.preventDefault()
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Join</h1>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <input className={styles.input}
                            name='username'
                            placeholder='Username'
                            type="text"
                            value={values[USERNAME]}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <input className={styles.input}
                            name='room'
                            placeholder='Room'
                            type="text"
                            value={values[ROOM]}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <Link 
                    className={styles.group} 
                    to={`/chat?username=${values[USERNAME]}&room=${values[ROOM]}`}
                    onClick={handleClick}
                    >
                        <button type='submit' className={styles.button}>
                            Sign In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Main