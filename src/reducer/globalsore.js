export const globalStore = (
  state = {
    visibility: false,
    cartItemCount: 0,
    total: 0,
    sideBArVisibility: false,
    showcategory:false,
  },
  action
) => {
  switch (action.type) {
    case "show":
      return { ...state, visibility: !state.visibility };
    case "itemCount":
      return { ...state, cartItemCount: action.payload };
    case "total":
      return { ...state, total: state.total + action.payload };
    case "visibl":
      return { ...state, sideBArVisibility: !state.sideBArVisibility };
      case 'showcategory':
        return {...state,showcategory:!state.showcategory}
    default:
      return state;
  }
};
