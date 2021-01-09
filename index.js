const express = ("express");
const app = express();

console.log("hello world")

//TO DO: More code


app.get("/", (req,res) => {
    res.send("hello world");
});

app.listen(3000, 
    () => console.log("Example app running"));