const initialState = {
  unreadMessage: 0,
}

export const visitingReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'MESSAGE_INCREMENT':
      return state.unreadMessage + 1
    case 'MESSAGE_DECREMENT':
      return state.unreadMessage - 1
    default:
      return state
  }
}