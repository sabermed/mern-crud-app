import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { TodoList } from './TodoList'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './EditTodo'
// import { useState } from 'react';
// import Axios from 'axios';


function App(){
  return (
    <div>
      <Router>
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route path="/update/:id" component={EditTodo}/>
          <Route path="/create" component={CreateTodo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// function App() {

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dateNaissance, setDate] = useState("");

//   const [newUsername, setNewUserName] = useState("");

//   const [dataList, setDataList] = useState([]);

//   const addData = () => {
//     Axios.post('http://localhost:5000/create', { 
//       username: username, 
//       email: email, 
//       dateNaissance:dateNaissance,
//     }).then(()=> {
//       setDataList([...dataList,{ 
//         username: username, 
//         email: email, 
//         dateNaissance:dateNaissance,
//       }]);
//     });
//   };

//   const showData = () => {
//     Axios.get('http://localhost:5000/getData').then((response)=> {
//       setDataList(response.data);
//     });
//   }

//   const updateData = (id) => {
//     Axios.put('http://localhost:5000/update', { username : newUsername, id : id}).then((response)=> {
//       alert("Updated");
//     });
//   }

//   const deleteData = (id) => {
//     Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
//       setDataList(
//         dataList.filter((val) => {
//           return val.id === id
//             ? {
//               id: val.id,
//               username: username, 
//               email: email, 
//               dateNaissance:dateNaissance,
//             }
//             : val;
//         })
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <div className="information">
//         <label >username</label>
//         <input 
//           type="text" 
//           onChange={(event) => {
//             setUserName(event.target.value);
//           }} 
//         />
//         <label >email</label>
//         <input 
//           type="email" 
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }} 
//         />
//         <label >date naissance</label>
//         <input 
//           type="date" 
//           onChange={(event) => {
//             setDate(event.target.value);
//           }} 
//         />
//         <button onClick={addData}>save</button>
//       </div>
//       <hr />
//       <div className="showedData">
//         <button onClick={showData}>show data</button>

//           {
//             dataList.map((val,key) => {
//               return (
//                 <div className="item">
//                   <div>
//                     <h4>Name: {val.username}</h4>
//                     <h4>Email: {val.email}</h4>
//                     <h4>Date Naissance: {val.dateNaissance}</h4>
//                   </div>
                  
//                   <div>
//                     <label>username:</label>
//                     <input
//                       type="text"
//                       placeholder={val.username}
//                       onChange={(event) => {
//                         setNewUserName(event.target.value);
//                       }}
//                     />
//                     <button
//                       onClick={() => {
//                         updateData(val.id);
//                       }}
//                     >
//                       {" "}
//                       Update
//                     </button>

//                     <button
//                       onClick={() => {
//                         deleteData(val.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })
//           }

//       </div>
      
//     </div>
//   );
// }