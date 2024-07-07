const fetchUser = (items = {}) => {
  return {
    type: "FETCH_USER",
    payload: items,
  };
};

export { fetchUser };
