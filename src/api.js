import Axios from 'axios';

export const createTodo = (username,email,dateNaissance) => {
  Axios.post('http://localhost:5000/create', { 
    username: username, 
    email: email, 
    dateNaissance:dateNaissance,
  }).then(()=> {
    // setDataList([...dataList,{ 
    //   username: username, 
    //   email: email, 
    //   dateNaissance:dateNaissance,
    // }]);
    console.log("created");
  });
};

export const deleteTodo = (id) => {
  Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
    // setDataList(
    //   dataList.filter((val) => {
    //     return val.id === id
    //       ? {
    //         id: val.id,
    //         username: username, 
    //         email: email, 
    //         dateNaissance:dateNaissance,
    //       }
    //       : val;
    //   })
    // );
    console.log('deleted');
  });
};


// export const getTodos = () => fetch("http://localhost:5000/getData").then(res => res.json())

// export const createTodo = (todo) => fetch("http://localhost:5000/create", {
//   method: "POST",
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(todo)
// })  

// export const updateTodo = (todo, id) => fetch(`http://localhost:5000/update:${id}`, {
//   method: "POST",
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(todo)
// })  

// export const getTodo = (id) => fetch(`http://localhost:5000/getData/${id}`).then(res => res.json())
