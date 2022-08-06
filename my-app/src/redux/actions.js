import axios from "axios";
export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_CAR_DETAILS = "GET_CAR_DETAILS";
export const FILTER_BY_CAR_TYPE = "FILTER_BY_CAR_TYPE";
export const SORT_CARS = "SORT_CARS";

const URL = "https://challenge.agenciaego.tech/api/models"

export function getAllCars() {
  return function (dispatch) {
    return axios(`${URL}`)
      .then(resp => {
        const carsWithLocalCurrency = resp.data.map(car => {
          const argentinianPrice = (car.price).toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
          })
          return { ...car, argentinianPrice }
        })
        const segmentOptions = [];
        resp.data.forEach(car => {
          if (!segmentOptions.includes(car.segment)) segmentOptions.push(car.segment)
        })
        dispatch({ type: GET_ALL_CARS, payload: { carsWithLocalCurrency, segmentOptions } })
      })
      .catch(error => console.log(error.message))
  }
};

export function getCarDetails(carId) {
  return function (dispatch) {
    return axios(`${URL}/${carId}`)
      .then(resp => {
        dispatch({ type: GET_CAR_DETAILS, payload: resp.data })
      })
      .catch(error => console.log(error.message))
  }
};

export function filterByCarType(option) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_CAR_TYPE, payload: option })
  }
};

export function sortCars(option) {
  return function (dispatch) {
    dispatch({ type: SORT_CARS, payload: option })
  }
};
