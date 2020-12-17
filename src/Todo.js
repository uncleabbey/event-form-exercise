import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
const list = [
  {
    id: 1,
    title: "Wash Cloth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, inventore.",
    isComplete: true,
  },
  {
    id: 2,
    title: "Take out the trash",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, inventore.",
    isComplete: true,
  },
  {
    id: 3,
    title: "Shopping",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, inventore.",
    isComplete: false,
  },
  {
    id: 4,
    title: "Listen to Music",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, inventore.",
    isComplete: true,
  },
  {
    id: 5,
    title: "Call HR",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, inventore.",
    isComplete: false,
  },
];

const Todo = ({
  id,
  title,
  isComplete,
  description,
  handleChange,
  handleDelete,
}) => {
  return (
    <div className="todo">
      <input
        id={id}
        type="checkbox"
        name="isComplete"
        className="checkbox"
        checked={isComplete}
        onChange={handleChange}
      />
      <div className={isComplete ? "isComplete" : ""}>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <button className="delete" id={id} onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

const changeEle = (arr, id) => {
  const todo = arr.find((item) => item.id === Number(id));
  if (todo.isComplete) {
    todo.isComplete = false;
  } else {
    todo.isComplete = true;
  }
  return arr;
};

export class TodoList extends Component {
  state = {
    todolist: list,
    title: "",
    description: "",
  };
  handleChange = (e) => {
    const { id } = e.target;
    this.setState({
      todolist: changeEle(this.state.todolist, id),
    });
  };
  handleDelete = (e) => {
    const { id } = e.target;
    this.setState({
      todolist: this.state.todolist.filter((todo) => todo.id !== Number(id)),
    });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 100),
      isComplete: false,
      title: this.state.title,
      description: this.state.description,
    };
    this.setState({
      todolist: [data, ...this.state.todolist],
      title: "",
      description: "",
    });
  };
  render() {
    const { title, description } = this.state;
    return (
      <div>
        <h1 className="header">Todo List</h1>

        <div className="add-todo">
          <NewTodoForm
            title={title}
            description={description}
            handleChange={this.onChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        {this.state.todolist.map(({ id, title, isComplete, description }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            description={description}
            isComplete={isComplete}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
