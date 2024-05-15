import express from "express";
import {PORT} from "./Utility/constants.js";

const app = express();

app.use(express.json());

app.use('/',(req,res)=>{res.send('Welcome to RuPay Bank Server')})

app.listen(PORT, () => {
  console.log(`\nServer is listening on port ${PORT}\n`);
  console.log(`Local            : http://localhost:${PORT}`);
  console.log(`On Your Network  : http://192.168.0.107:${PORT}`)
});
