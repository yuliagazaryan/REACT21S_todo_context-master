import React, { useReducer } from 'react';

const initialState = {
    notes: [
        {
          id: 1,
          title: "Create clean app",
          task: "npx create-react-app",
          done: false,
        },
        {
          id: 2,
          title: "Clean app",
          task: "Delete and clean unnecessary stuff",
          done: false,
        },
        {
          id: 3,
          title: "Create store / context",
          task: "Create new file and use React.createContext()",
          done: false,
        },
      ]
}

export const NotesContext = React.createContext();

const reducer = (state, action) => {
switch (action.type) {
    case 'ADD_NOTE':
        return {
            notes: [
                ...state.notes, 
                {
                  id: new Date().valueOf(), 
                  title: action.todo.title, 
                  task: action.todo.task,
                  done: false,
              },
          ],
          };
    case 'DONE_NOTE':
        return;
        default:
            return state;
}

};

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodoItem = (todo) => {
        dispatch({
            type: 'ADD_NOTE',
            todo: todo,
        })
    };

    const doneTodo = (todo) => {
        dispatch({
            type: "DONE_NOTE",
            todo: todo,
        })
    }

    const value = {
        notes: state.notes,
        addTodoItem: addTodoItem,
        doneTodo: doneTodo,
    }

    return (
    <NotesContext.Provider value={value}>
        {children}
    </NotesContext.Provider>
    );
}
