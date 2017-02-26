/**
 * Booking service
 * Reducer
 */
import { handleActions } from 'redux-actions'

const initialState = {
  byId: {},
  isFetching: false,
  error: false,
  errorMessage: null
}

const bookings = handleActions({
  BOOKING_FETCH: (state) => {
    return { ...state, isFetching: true }
  },
  BOOKING_FETCH_SUCCESS: (state, action) => {
    return {
      ...state,
      byId: { ...state.byId, [action.payload.id]: action.payload },
      isFetching: false
    }
  }
}, initialState)

export default bookings
