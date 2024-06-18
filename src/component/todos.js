import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{ marginTop: 10 }}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox
                color="primary"
                style={{ paddingLeft: 0 }}
                // onClick event to handle deletion
                onClick={() => handleDelete(todo.id)}
              />
              <ListItemText primary={todo.content} secondary={todo.date} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
