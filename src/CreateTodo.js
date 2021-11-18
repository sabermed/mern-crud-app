import Axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateTodo = () => {
  const history = useHistory();

  const [newUsername, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDateNaissance, setNewDateNaissance] = useState("");

  const createTodo = (username,email,dateNaissance) => {
    Axios.post('http://localhost:5000/create', { 
      username: username, 
      email: email, 
      dateNaissance:dateNaissance,
    });
  };
  
  const onSubmit = async (newUsername,newEmail,newDateNaissance) => {
    await createTodo(newUsername,newEmail,newDateNaissance)
    history.push("/")
  };

  return (
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
                <button type="button" className="btn btn-primary" onClick={() => {onSubmit(newUsername,newEmail,newDateNaissance) }} >
                Save Todo
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};