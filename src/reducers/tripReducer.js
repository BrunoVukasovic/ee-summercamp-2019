import { GET_BOOKED_TRIPS } from "../actions/types";

const initialState = {
  bookedTrips: [
    {
      tripID: 1,
      date: Date.now(),
      numberOfPeople: 3
    },
    {
      tripID: 2,
      date: Date.now(),
      numberOfPeople: 5
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKED_TRIPS:
      return {
        ...state
      };
    default:
      return state;
  }
}
