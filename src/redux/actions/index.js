export const deposit = (amount) => {
  return { type: "deposit", payload: amount };
};

export const withdraw = (amount) => {
  return { type: "withdraw", payload: amount };
};
