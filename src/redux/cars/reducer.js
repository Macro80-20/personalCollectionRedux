const initialState = {
  data: {},
  loading: false,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REQUEST':
      return {
        ...state,
        loading: payload
      };
    case 'SUCCESS':
      return {
        ...state,
        data: payload.data,
        loading: false,
        error: null
      };
    case 'ERROR':
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
