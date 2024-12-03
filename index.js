const express = require('express')
const mongoose =require('mongoose')
const app = express()

app.use(express.json());

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});


app.get('/', (req,res)=>{
    res.send("Hello from  Node API updated")
})


app.post('/api/products', (req, res) =>{
    console.log(req.body);
    res.send(req.body);

});

mongoose.connect("mongodb+srv://enyitang56:xtz3hPymkFN7h7UQ@backenddb.framo.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to Database");
})
.catch(()=>{
    console.log("Connection failed")
})