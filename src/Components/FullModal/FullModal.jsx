/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-literals */
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './FullModal.module.css'
import FormGroup from '../FormGroup/FormGroup'
import close from '../../Assets/images/close.png'
import messages from './FullModal.messages'
import Loader from '../Loader/Loader'

/**
 * Full Modal Container.
 * @param {Object} props .
 * @returns {void} .
 */
const FullModalContainer = (props) => {
  const {
    open, person, validatePerson,
    date, validateDate, changeDataDate,
    changeData, saveData, closeModal,
    response
  } = props
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, [response,
    open,
    validateDate,
    validatePerson])

  useEffect(() => {
    if (validateDate || validatePerson) {
      loading && setLoading(false)
    }
  })

  /**
   * Send data to backend.
   * @returns {void} .
   */
  const sendData = () => {
    setLoading(true)
    saveData()
  }

  const content = (
    <div className={styles.ContainerModal}>
      <div className={styles.Header}>
        <div className={styles.TitleModal}>{messages.titleModal}</div>
        <div
          role="button"
          tabIndex="0"
          onClick={closeModal}
          className={styles.Close}
        >
          <img
            alt="close"
            src={close}
          />
        </div>
      </div>
      {loading ? <Loader /> : (
        <div className={styles.BodyModal}>
          <FormGroup
            error={validatePerson ? messages.required : false}
            typeInput="text"
            textLabel={messages.person}
            defaultValue={person}
            onChange={changeData}
          />
          <div className={styles.ContainerDate}>
            <p>{messages.date}</p>
            <div className={styles.DatePicker}>
              <DatePicker
                className={styles.DatePicker}
                selected={date}
                onChange={changeDataDate}
              />
              {validateDate && <span className={styles.ErrorMessage}>{messages.required}</span>}
            </div>
          </div>
          <div
            className={styles.Button}
            onClick={sendData}
            role="button"
            tabIndex="0"
          >
            {messages.save}
          </div>
          {response && <p className={[styles.ErrorMessage, styles.Top].join(' ')}>{response.message}</p>}
        </div>
      )}
    </div>
  )

  return (
    <>
      {open ? (
        <div className={styles.PopUpFullModal}>
          {content}
        </div>
      ) : ''}
    </>
  )
}

export default FullModalContainer
