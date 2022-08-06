import axios from "axios";
export const GET_ALL_CARS = "GET_ALL_CARS";

const URL = "https://challenge.agenciaego.tech/api/models/"

export function getAllCars() {
  return function (dispatch) {
    return axios(`${URL}`)
      .then(resp =>
      // dispatch({ type: GET_ALL_CARS, payload: resp.data }))
      { console.log(resp.data) }
      )
      .catch(error => console.log(error.message))
  }
};
