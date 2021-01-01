export const AppReducer = (state, action) => {
  switch(action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      }
    default: 
      return state
  }
}