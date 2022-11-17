const express = require('express');
const app = express();
const port = 3000;





app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//TEMP 1
app.get("/bird", (req, res) => {
    res.render("Indexbird")
})

app.get("/cat", (req, res) => {
    res.render("Indexcat")
})

app.get("/dog", (req, res) => {
    res.render("Indexdog")
})

app.get("/insect", (req, res) => {
    res.render("Indexinsect")
})

app.get("/fish", (req, res) => {
    res.render("Indexfish",)
})

//TEMP2
app.get("/about", (req, res) => {
    res.render("Indexabout")
})

app.get("/catalog", (req, res) => {
    res.render("Indexcatalog")
})

app.get("/contact", (req, res) => {
    res.render("Indexcontact")
})

app.get("/help", (req, res) => {
    res.render("Indexhelp",)
})

app.get("/home", (req, res) => {
    res.render("Indexhome")
})


app.listen(port, () => {
    console.log('listening on port', port);
});