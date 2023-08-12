import { types } from "../types";

const initialState = {
   value: '',
   users: []
}

export default function usersReducer(state = initialState, action) {
   switch (action.type) {
      case types.VALUE:
         return { ...state, value: action.payload };
      case types.ADD:
         return { ...state, users: [...state.users, action.payload] };
      case types.DELETE:
         return { ...state, users: [] };
      case types.CLEAR:
         return {...state , numbers: [] , value: ''};
      default:
         return state;
   }
}
