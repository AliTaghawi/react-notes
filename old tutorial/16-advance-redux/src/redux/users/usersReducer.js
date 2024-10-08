const initialState = {
  users: [],
  loading: false,
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHUSERSREQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCHUSERSSUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCHUSERSERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
