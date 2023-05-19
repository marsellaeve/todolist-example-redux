import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  title: "",
  item: "",
  edit: false,
  titleWeb: "",
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newitem = {
        id: Date.now(),
        value: state.title,
        completed: false,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
        title: "",
      };

    case actionTypes.EDIT_ITEM:
      var newList = [...state.items];
      var index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].value = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.DELETE_ITEM:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    case actionTypes.SET_COMPLETED:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].completed = !state.item.completed;
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: true,
      };
    case actionTypes.SET_TITLE_WEB:
      return {
        ...state,
        titleWeb: action.titleWeb,
      };
    default:
      return state;
  }
};

export default items;
