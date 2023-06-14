const inititalState = { name: "Murilo V.", age: 20 };

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case "CHANGEAGE": {
        return { ...state, age: action.payload };
      }
    default: {
      return inititalState;
    }
  }
};
export default userReducer;