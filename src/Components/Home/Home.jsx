/* eslint-disable react/jsx-no-literals */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Card from '../Card/Card'
import messages from './Home.messages'
import styles from './Home.module.css'
import { getVehicles, updateVehicles } from '../../Api/Request'
import FullModal from '../FullModal/FullModal'
import Loader from '../Loader/Loader'
import Alert from '../Alert/Alert'

/**
 * Home Component
 * @returns {void} .
 */
const Home = () => {
  const [vehicles, setVehicles] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  const [response, setResponse] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [validatePerson, setValidatePerson] = useState(false)
  const [validateDate, setValidateDate] = useState(false)
  const [person, setPerson] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    getVehicles(success, errorResponse)
  }, [])

  /**
   * Success
   * @param {Array} result .
   * @returns {void} .
   */
  const success = (result) => {
    const newVehicles = result.data
    setVehicles(newVehicles)
    setLoading(false)
  }

  /**
   * Error
   * @param {Object} err .
   * @returns {void} .
   */
  const errorResponse = (err) => {
    setError(err)
    setLoading(false)
  }

  /**
   * Save data
   * @param {Object} error .
   * @returns {void} .
   */
  const saveData = () => {
    if (!person || !date) {
      setValidatePerson(!person)
      setValidateDate(!date)
    } else {
      const dateText = moment(date).format('YYYY/MM/DD')
      const data = {
        ...currentItem,
        person,
        estimateDate: dateText
      }

      updateVehicles(data, () => {
        closeModal()
        getVehicles(success, error)
        const message = messages.saveSuccess.replace('{person}', person)
          .replace('{date}', dateText)
          .replace('{id}', currentItem.id)
        setShowAlert(message)
      },
      (err) => {
        setResponse(err)
      })
    }
  }

  /**
   * Change date
   * @param {Object} newDate .
   * @returns {void} .
   */
  const changeDataDate = (newDate) => {
    setDate(newDate)
    if (newDate) {
      setValidateDate(false)
    } else {
      setValidateDate(true)
    }
  }

  /**
   * Change data
   * @param {Object} event .
   * @returns {void} .
   */
  const changeData = (event) => {
    setPerson(event.target.value)
    if (event.target.value) {
      setValidatePerson(false)
    } else {
      setValidatePerson(true)
    }
  }

  /**
   * Function onClick card.
   * @param {Object} item .
   * @returns {void} .
   */
  const actionCard = (item) => {
    setCurrentItem(item)
    setShowModal(!showModal)
  }

  /**
   * Function onClick card.
   * @returns {void} .
   */
  const closeModal = () => {
    setPerson('')
    setDate('')
    setValidatePerson(false)
    setValidateDate(false)
    setResponse(false)
    setShowModal(false)
  }

  return (
    <div className={styles.Container}>
      <Alert
        setShowAlert={setShowAlert}
        showAlert={showAlert}
      />
      <FullModal
        person={person}
        validatePerson={validatePerson}
        date={date}
        validateDate={validateDate}
        open={showModal}
        changeData={changeData}
        saveData={saveData}
        closeModal={closeModal}
        changeDataDate={changeDataDate}
        response={response}
      />
      <p className={styles.Title}>{messages.title}</p>
      {loading ? <Loader /> : (
        <div className={styles.Wrapper}>
          {vehicles && vehicles.map(item => (
            <Card
              key={item._id}
              item={item}
              actionCard={actionCard}
            />
          ))}
        </div>
      )}
      {error && <p className={styles.ErrorMessage}>{messages.error}</p>}
    </div>
  )
}

export default Home
