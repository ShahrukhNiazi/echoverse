import {
  All_EVENTS,
  All_EVENTS_SUCCESS,
  All_EVENTS_FAILED
} from '../actions/actionType'


const initialState = {
  eventsData: [null],
  isLoading: false,
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case All_EVENTS:
      return {
        ...state,
        isLoading: true,
      };

    case All_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        eventsData: payload,
      }

    case All_EVENTS_FAILED:
      return {
        ...state,
        isloading: false,
      };

      // ==============================================

    default:
      return state
  }
}

export default userReducer
