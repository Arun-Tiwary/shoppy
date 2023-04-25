const initialState = [
  {
    username: "",
    password: "",
  },
];

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "LOG_OUT":
      return [...initialState];

    default:
      return state;
  }
};

export default userDataReducer;
