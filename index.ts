import express from "express";

const app = express();

app.use(express.static("./web"));

app.listen(8080, ()=> {
    console.log("Server started @ http://localhost:8080");
});