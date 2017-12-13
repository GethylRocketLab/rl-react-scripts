import { FETCH_REQUEST_START, FETCH_REQUEST_COMPLETE } from '../constants/app'

const initialState = {
  isLoading: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REQUEST_START:
      return { ...state, isLoading: true }
    case FETCH_REQUEST_COMPLETE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default reducer
