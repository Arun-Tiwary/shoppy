const initialState = {};

const userDataReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_USER":
      return { ...state, ...action.payload };

    case "LOG_OUT":
      // return [...initialState];
      return initialState;

    default:
      return state;
  }
};

export default userDataReducer;
