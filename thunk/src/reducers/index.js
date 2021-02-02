import { IS_LOADING, DATA_LOADED, DATA_ERROR } from "../actions";

const initialState = {
  quote: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:{
      return {
        ...state,
        isFetching: true,
        quote: null,
        error: "",
      };
    }
    case DATA_LOADED:{
      return {
        ...state,
        isFetching: false,
        quote: action.payload,
        error: "",
      };
    }
    case DATA_ERROR:{
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
