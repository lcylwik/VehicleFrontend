/* eslint-disable react/jsx-no-literals */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import messages from './Home.messages'
import styles from './Home.module.css'
import { getVehicles } from '../Api/Request'
import FullModal from '../FullModal/FullModal'


/**
 * Home Component
 * @returns {void} .
 */
const Home = () => {
  const [vehicles, setVehicles] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [validatePerson, setValidatePerson] = useState(false)
  const [person, setPerson] = useState('')

  useEffect(() => {
    const endpointVehicles = 'vehicles'
    getVehicles(endpointVehicles, success, error)
  }, [])

  /**
   * Success
   * @param {Array} result .
   * @returns {void} .
   */
  const success = (result) => {
    const newVehicles = result.data
    setVehicles(newVehicles)
  }

  /**
   * Error
   * @param {Object} error .
   * @returns {void} .
   */
  const error = (error) => {
    console.log(error)
  }

  /**
   * Save data
   * @param {Object} error .
   * @returns {void} .
   */
  const saveData = () => {
  }

  /**
   * Change data
   * @param {Object} event .
   * @returns {void} .
   */
  const changeData = (event) => {
    setPerson(event.target.value)
  }

  /**
   * Function onClick card.
   * @returns {void} .
   */
  const actionCard = () => {
    setShowModal(!showModal)
  }

  /**
   * Function onClick card.
   * @returns {void} .
   */
  const closeModal = () => {
    setPerson('')
    setShowModal(false)
  }

  return (
    <div className={styles.Container}>
      <FullModal
        person={person}
        validatePerson={validatePerson}
        open={showModal}
        changeData={changeData}
        saveData={saveData}
        closeModal={closeModal}
      />
      <p className={styles.Title}>{messages.title}</p>
      <div className={styles.Wrapper}>
        {vehicles && vehicles.map(item => (
          <Card
            key={item._id}
            item={item}
            actionCard={actionCard}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
