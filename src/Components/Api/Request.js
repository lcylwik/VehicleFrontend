/**
 * Make a request
 * @param {string} endpoint - endpoint to create a request
 * @param {Object} options - Body request
 * @param {Function} success .
 * @param {Function} error .
 * @returns {Object} return object
 */
const callApi = async (endpoint, options, success, error) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}${endpoint}`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      success && success(data)
    } else {
      error && error(data)
    }
  } catch (err) {
    error && error(err)
  }
}

/**
 * Get Vehicles
 * @param {String} endpoint .
 * @param {Function} success .
 * @param {Function} error .
 * @returns {Object} Vehicles Object
 */
const getVehicles = (endpoint, success, error) => callApi(endpoint, {
  method: 'GET',
}, success, error)

/**
 * Update Vehicles
 * @param {String} endpoint .
 * @param {String} data .
 * @param {Function} success .
 * @param {Function} error .
 * @returns {Object} Vehicles Object
 */
const updateVehicles = (endpoint, data, success, error) => callApi(endpoint, {
  method: 'POST',
  body: JSON.stringify({
    data
  }),
}, success, error)

export { getVehicles, updateVehicles }
