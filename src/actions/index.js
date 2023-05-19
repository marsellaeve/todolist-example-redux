import * as actionTypes from "./actionTypes";

export const addItem = () => {
  return {
    type: actionTypes.ADD_ITEM,
  };
};

export const deleteItem = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    item: item,
  };
};

export const editItem = (item) => {
  return {
    type: actionTypes.EDIT_ITEM,
    item: item,
  };
};
export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title,
  };
};
export const setCompleted = () => {
  return {
    type: actionTypes.SET_COMPLETED,
  };
};
export const setItem = (item) => {
  return {
    type: actionTypes.SET_ITEM,
    item: item,
  };
};
export const setEdit = () => {
  return {
    type: actionTypes.SET_EDIT,
  };
};

export const setTitleWeb = (titleWeb) => {
  return {
    type: actionTypes.SET_TITLE_WEB,
    titleWeb: titleWeb
  }
}