/* eslint-disable react/jsx-no-literals */
import React, { useState } from 'react'
import messages from './Card.messages'
import styles from './Card.module.css'
import noFoundCar from '../../Assets/images/not_found.jpg'

/**
 * Card component.
 * @returns {void} .
 */
const Card = ({
  item, actionCard
}) => {
  const [errorImage, setErrorImage] = useState(false)
  const [background, setBackground] = useState(false)

  /**
   * Function when image no found.
   * @returns {void} .
   */
  const onErrorImage = () => {
    setErrorImage(true)
  }

  /**
   * On action card.
   * @returns {void} .
   */
  const onActionCard = () => {
    actionCard(item)
    if (background) setBackground(false)
    else setBackground(styles.Background)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={[styles.CardContainer, background || ''].join(' ')}
      onClick={() => onActionCard(item)}
    >
      <p className={styles.Id}>{item.id}</p>
      <div className={styles.Header}>
        {errorImage ? (
          <img
            alt="noFound"
            src={noFoundCar}
            className={styles.ImageCar}
          />
        ) : (
          <img
            alt="car"
            src={item.image}
            onError={onErrorImage}
            className={styles.ImageCar}
          />
        )}
      </div>
      <div className={styles.Body}>
        <div className={styles.Detail}>
          <p className={styles.Key}>{messages.make}</p>
          <p className={styles.Value}>{item.make}</p>
        </div>
        <div className={styles.Detail}>
          <p className={styles.Key}>{messages.model}</p>
          <p className={styles.Value}>{item.modelCar}</p>
        </div>
        <div className={styles.Detail}>
          <p className={styles.Key}>{messages.km}</p>
          <p className={styles.Value}>{item.km || '--'}</p>
        </div>
        <div className={styles.Detail}>
          <p className={styles.Key}>{messages.date}</p>
          <p className={styles.Value}>{item.estimateDate || '--'}</p>
        </div>
        <div className={styles.Detail}>
          <p className={styles.Key}>{messages.description}</p>
          <p className={styles.Value}>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
