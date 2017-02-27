/**
 * Booking service
 * Actions
 */

const mockData = {
  id: 'A7C8JK',
  quantity: 5,
  seats: ['D05', 'D06', 'D07']
}

export const fetchBookingSuccess = (booking) => {
  return {
    type: 'BOOKING_FETCH_SUCCESS',
    payload: booking
  }
}

export const fetchBooking = bookingId => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'BOOKING_FETCH' })

    window.setTimeout(() => {
      const payload = { ...mockData, id: bookingId }
      dispatch(fetchBookingSuccess(payload))
      resolve(mockData)
    }, 1000)
  })
}

export const makeBooking = (bookingId, quantity) => {
  return {
    type: 'BOOKING_ADD',
    payload: {
      id: bookingId,
      quantity: quantity,
      seats: mockData.seats
    }
  }
}
