import { React } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionTypes from "./actions";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { useEffect } from "react";

function App({
  title,
  titleWebsite,
  addItem,
  editItem,
  edit,
  setCompleted,
  todoList,
  setTitle,
  setTitleWeb,
  setItem,
  setEdit,
  deleteItem,
}) {
  // const todoListFilter = todoList.filter((item) => {
  //   if (item.completed == false) {
  //     return item;
  //   }
  // });
  // console.log(todoList);
  const handleEdit = (item) => {
    setTitle(item.value);
    setEdit();
    setItem(item);
  };

  const handleDelete = (item) => {
    setItem(item);
    deleteItem();
  };
  const handleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
    setTitleWeb(title);
  };

  const handleClick = () => {
    if (title.length === 0) {
      return;
    }
    if (edit) {
      editItem();
    } else {
      addItem();
    }
  };
  const handleComplete = (item) => {
    setItem(item);
    setCompleted();
  };

  // console.log(todoList)
  return (
    <>
      <h1>{titleWebsite}</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={title}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>{edit ? "Edit" : "Add"}</Button>
      <List>
        {todoList &&
          todoList.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemIcon>
                  <IconButton onClick={() => handleComplete(item)}>
                    {!item.completed && (
                      <CheckBoxOutlineBlankIcon color="primary" />
                    )}
                    {item.completed && <CheckBoxIcon color="primary" />}
                  </IconButton>
                </ListItemIcon>

                <ListItemText primary={item.value} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(item)}
                  >
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    title: state.title,
    titleWebsite: state.titleWeb,
    todoList: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(actionTypes.addItem()),
    deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
    editItem: () => dispatch(actionTypes.editItem()),
    setEdit: () => dispatch(actionTypes.setEdit()),
    setCompleted: () => dispatch(actionTypes.setCompleted()),
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setTitleWeb: (titleWeb) => dispatch(actionTypes.setTitleWeb(titleWeb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
