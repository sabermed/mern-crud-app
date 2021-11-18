import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios';
// import { getTodos } from "./api"

export const TodoList = () => {
  const [items, setItems] = useState([])

  const getTodos = () => {
    Axios.get('http://localhost:5000/getTodos').then((response)=> {
      return setItems(response.data);
    });
  };
  
  useEffect(() => {
    getTodos()
  }, [])

  if (items === []) {
      return <h1>Loading ...</h1>;
  }else{
    return (
        <div className="container">
          <div className="mt-3">
            <h3>Todo List</h3>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>username</th>
                  <th>email</th>
                  <th>date naissance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map(todo => (
                    <tr key={todo.id}>
                      <td>
                        {todo.username}
                      </td>
                      <td>
                        {todo.email}
                      </td>
                      <td>
                        {todo.dateNaissance}
                      </td>
                      <td>
                        <Link to={`/update/${todo.id}`}>Edit</Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      );
  }
  
};