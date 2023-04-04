const initalState = [
  {
    username: "Gest",
    password: "1234",
  },
  {
    username: "Batman",
    password: "Gotham",
  },
  {
    username: "Iron Man",
    password: "Miami",
  },
  {
    username: "Spiderman",
    password: "Queens",
  },
];

const userDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default userDataReducer;
