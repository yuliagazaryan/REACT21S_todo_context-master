import React, {useContext} from "react";

import classes from "./TodoList.module.css";
import { NotesContext } from "../store/todoStore";

const TodoList = () => {
const context = useContext(NotesContext);
const doneHandler = () => {
  console.log("item was clicked")
}

return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {context.notes.map((note) => {
        return (
          <div className={classes.todo} key={note.id} onClick={doneHandler}>
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
