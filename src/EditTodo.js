import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Axios from 'axios';
// import { TodoForm } from "./TodoForm";
// import { getTodo, updateTodo } from "./api";

export const EditTodo = () => {
  const match = useRouteMatch()
  const id = match.params.id;
  const history = useHistory()
  
  const [todo, setTodo] = useState();
  const [newUsername, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDateNaissance, setNewDateNaissance] = useState("");

  const updateTodo = (id, newUsername, newEmail, newDateNaissance) => {
    Axios.put(`http://localhost:5000/update/${id}`, { username : newUsername}).then((response)=> {
        setTodo(response.data);
    });
  }

  const getTodo = (id) => {
    Axios.get(`http://localhost:5000/getTodo/${id}`).then((response)=> {
        setTodo(response.data);
    });
  };

  useEffect(() => {
    
    getTodo(id)
  }, []);

  const onSubmit = (id, newUsername,newEmail,newDateNaissance) => {
    updateTodo(id, newUsername, newEmail, newDateNaissance)
    history.push("/")
  }

  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <form >
            <div className="form-group">
                <label htmlFor="text">username:</label>
                <input
                className="form-control"
                type="text"
                name="username"
                onChange={(event) => {
                    setNewUserName(event.target.value);
                }}
                />
                <label htmlFor="text">email:</label>
                <input
                className="form-control"
                type="email"
                name="email"
                onChange={(event) => {
                    setNewEmail(event.target.value);
                }}
                />
                <label htmlFor="text">date naissance:</label>
                <input
                className="form-control"
                type="date"
                name="dateNaissance"
                onChange={(event) => {
                    setNewDateNaissance(event.target.value);
                }}
                />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={() => {onSubmit(id, newUsername,newEmail,newDateNaissance) }} >
                Save Todo
                </button>
            </div>
        </form>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};