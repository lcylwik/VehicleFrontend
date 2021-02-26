import React from 'react'
import messages from './Home.messages'
import styles from './Home.module.css'

/**
 * Home Component
 * @returns {void} .
 */
const Home = () => (
  <div className={styles.Container}>
    <p className={styles.Title}>{messages.title}</p>
  </div>
)

export default Home
