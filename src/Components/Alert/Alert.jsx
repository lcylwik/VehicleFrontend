/* eslint-disable no-useless-constructor */
import React, { useEffect, useRef } from 'react'
import styles from './Alert.module.css'

/**
 * Alert component.
 * @returns {void} .
 */
const Alert = ({ setShowAlert, showAlert }) => {
  const timer = useRef(null)

  useEffect(() => {
    clearTimeout(timer.current)
    if (showAlert) {
      timer.current = setTimeout(() => {
        setShowAlert(false)
        clearTimeout(timer.current)
      }, 7000)
    }
  }, [showAlert, setShowAlert])

  if (!showAlert) {
    return null
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Alert}>
        {showAlert}
      </div>
    </div>
  )
}

export default Alert
