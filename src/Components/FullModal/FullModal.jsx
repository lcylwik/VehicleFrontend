/* eslint-disable react/jsx-no-literals */
import React from 'react'
import styles from './FullModal.module.css'
import FormGroup from '../FormGroup/FormGroup'
import close from '../../Assets/images/close.png'
import messages from './FullModal.messages'

/**
 * Full Modal Container.
 * @param {Object} props .
 * @returns {void} .
 */
const FullModalContainer = (props) => {
  const {
    open, person, validatePerson, changeData, saveData, closeModal
  } = props

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
      <div className={styles.BodyModal}>
        <FormGroup
          error={validatePerson}
          typeInput="text"
          textLabel={messages.person}
          defaultValue={person}
          onChange={changeData}
        />
        <div
          className={styles.Button}
          onClick={saveData}
          role="button"
          tabIndex="0"
        >
          {messages.save}
        </div>
      </div>
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
