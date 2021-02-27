/* eslint-disable react/jsx-no-literals */
import React from 'react'
import styles from './FormGroup.module.css'

/**
 * Form Group component
 * @param {string} idInput - id of the input
 * @param {boolean} error - true if there was an error
 * @param {string} errorText - text to show when error occured
 * @param {string} typeInput - type of input (text,number,email)
 * @param {string} textLabel - text to present in the label
 * @return {void}
 */
const FormGroup = ({
  idInput,
  error,
  typeInput,
  textLabel,
  onChange,
  style,
  styleForm,
  defaultValue,
  dataCheckout,
  disabled
}) => {
  let errorSpan = null
  if (error) {
    errorSpan = <span className={styles.ErrorMessage}>{error}</span>
  }
  const labelId = `label-${idInput}`
  return (
    <div className={styleForm || styles.Form}>
      <label
        id={labelId}
        htmlFor={idInput}
        className={styles.Input}
      >
        <input
          type={typeInput}
          id={idInput}
          disabled={disabled}
          placeholder="&nbsp;"
          onChange={onChange}
          value={defaultValue}
          data-checkout={dataCheckout}
        />
        <span
          style={style}
          className={styles.Label}
        >
          {textLabel}
        </span>
        <span className={styles.Border} />
      </label>
      {errorSpan}
    </div>
  )
}

export default FormGroup
