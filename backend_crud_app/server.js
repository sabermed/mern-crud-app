const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password: "password",
    database: "mydatabase",
});

app.post('/create',(req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const dateNaissance = req.body.dateNaissance;

    db.query(
        'insert into mytable (username,email,dateNaissance) VALUES (?,?,?)', 
        [username,email,dateNaissance],
        (err, result) => {
            if(!err){
                res.send('values inserted');
            }else{
                console.log(err);
            }
        }
    );

});

app.get('/getTodos',(req, res) => {

    db.query(
        'SELECT * FROM mytable',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );

});

app.get('/getTodo/:id',(req, res) => {
  const id = req.params.id;
  db.query(
      'SELECT * FROM mytable WHERE id=?', [id],
      (err, result) => {
          if (err) {
              console.log(err);
          } else {
              res.send(result);
          }
      }
  );

});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    db.query(
      "UPDATE mytable SET username = ? WHERE id = ?",
      [username, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM mytable WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });





//routes 
// app.use(express.json());
// app.use('/','/routes/routes');

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", " ,content-type");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    
//     next();
//     console.log(error)
//   });



// const PORT =process.env.PORT
const PORT = 5000
app.listen(PORT,"localhost",(err)=>
err ? console.log(err) :console.log(`server is running on http://localhost:${PORT}`)
);