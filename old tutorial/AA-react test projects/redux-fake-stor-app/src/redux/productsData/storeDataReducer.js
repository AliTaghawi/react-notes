const initialState = {
  loading: false,
  data: [],
  error: "",
};

const productsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHPRODUCTSDATAREQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCHPRODUCTSDATASECCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCHPRODUCTSDATAERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsDataReducer;
