import axios from "axios";
export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_CAR_DETAILS = "GET_CAR_DETAILS";

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
          return { ...car, price: argentinianPrice }
        })
        dispatch({ type: GET_ALL_CARS, payload: carsWithLocalCurrency })
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
