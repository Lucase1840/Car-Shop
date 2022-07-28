import {
  GET_ALL_CARS,
} from "./actions"

const initialState = {
  allCars: []
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CARS:
      return { ...state, allCars: payload }

    default: return state;
  }
}