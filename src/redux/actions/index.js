export const deposit = (amount) => (dispatch) => {
  return dispatch({ type: "deposit", payload: amount });
};

export const withdraw = (amount) => (dispatch) => {
  return dispatch({ type: "withdraw", payload: amount });
};
