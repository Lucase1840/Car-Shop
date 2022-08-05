import {
  GET_ALL_CARS,
  GET_CAR_DETAILS,
  FILTER_BY_CAR_TYPE,
  SORT_CARS
} from "./actions"

const initialState = {
  allCars: [],
  carTypeOptions: [],
  carDetails: {},
  filteredCarsByType: [],
  sortFlag: true
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CARS:
      return {
        ...state,
        allCars: payload.carsWithLocalCurrency,
        carTypeOptions: payload.segmentOptions
      }

    case GET_CAR_DETAILS:
      return { ...state, carDetails: payload }

    case FILTER_BY_CAR_TYPE:
      const filteredCars = state.allCars.filter(car => car.segment === payload)
      return { ...state, filteredCarsByType: filteredCars }

    case SORT_CARS:
      let sortedCars = state.filteredCarsByType.length ?
        [...state.filteredCarsByType]
        :
        [...state.allCars]

      if (payload === "De menor a mayor precio") {
        sortedCars.sort((a, b) => a.price - b.price)
      }

      if (payload === "De mayor a menor precio") {
        sortedCars.sort((a, b) => b.price - a.price)
      }

      if (payload === "Mas nuevos primero") {

        sortedCars.sort((a, b) => b.year - a.year)
      }

      if (payload === "Más viejos primero") {

        sortedCars.sort((a, b) => a.year - b.year)
      }

      if (state.filteredCarsByType.length) {
        return { ...state, sortFlag: !state.sortFlag, filteredCarsByType: sortedCars }
      } else {
        return { ...state, sortFlag: !state.sortFlag, allCars: sortedCars }
      }

    default: return state;
  }
}