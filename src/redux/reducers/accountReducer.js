const accountReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "deposit":
      return (state = state + payload);
    case "withdraw":
      return (state = state - payload);
    default:
      return state;
  }
};

export default accountReducer;
