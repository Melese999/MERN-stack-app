const express = require("express");
require('dotenv')
require('./config/db');
const app = express();
app.use(express.json());

app.use((err,req,res,next)=>{
  const errorStatus = err.errorStatus || 500;
  const errorMessage = err.errorMessage || "something went wrong";
  res.status(errorStatus).send(errorMessage);
});

require('./routes/userRoute') (app);


const PORT = process.env.PORT || 8081;

app.listen(PORT,()=>{
    console.log('server is running at ' + PORT);
})