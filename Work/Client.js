const express= require("express");
const app=express();
app.use(express.static("IMAGES"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3334, () => {
    console.log("Client App running at 3334");
})