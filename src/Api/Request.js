/* eslint-disable no-underscore-dangle */
import axios from 'axios'

/**
 * Make a request
 * @param {Object} newData - Body request
 * @param {Function} success .
 * @param {Function} error .
 * @returns {Object} return object
 */
const updateVehicles = async (newData, success, error) => {
  try {
    const config = {}
    const body = {
      ...newData
    }
    const url = `${process.env.REACT_APP_API_URL}vehicle/${newData._id}`
    const response = await axios.put(url, body, config)
    const { data } = response
    if (response.statusText === 'OK') {
      success && success(data)
    } else {
      error && error(data)
    }
  } catch (err) {
    const { data } = err.response
    error && error(data)
  }
}

/**
 * Make a request
 * @param {Function} success .
 * @param {Function} error .
 * @returns {Object} return object
 */
const getVehicles = async (success, error) => {
  try {
    const config = {}
    const url = `${process.env.REACT_APP_API_URL}vehicles`
    const response = await axios.get(url, config)
    const { data } = response
    if (response.statusText === 'OK') {
      success && success(data)
    } else {
      error && error(data)
    }
  } catch (err) {
    const { data } = err.response
    error && error(data)
  }
}

export { getVehicles, updateVehicles }
