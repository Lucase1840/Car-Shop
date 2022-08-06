import {
  GET_ALL_CARS,
  GET_CAR_DETAILS
} from "./actions"

const initialState = {
  allCars: [],
  carDetails: {}
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CARS:
      return { ...state, allCars: payload }

    case GET_CAR_DETAILS:
      return { ...state, carDetails: payload }

    default: return state;
  }
}