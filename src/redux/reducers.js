const reducers = (state, action) => {
  const actionType = action.type;
  switch (actionType) {
    case "alert":
      console.log("reducer", action.payload.name);
      return state;
    default:
      return state;
  }
}
export default reducers;
