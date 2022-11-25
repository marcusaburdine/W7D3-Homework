const express = require('express');
const app = express();
const port = 3000;





app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//TEMP 1
app.get("/bird", (req, res) => {
    res.render("templateOne/bird")
})

app.get("/cat", (req, res) => {
    res.render("templateOne/cat")
})

app.get("/dog", (req, res) => {
    res.render("templateOne/dog")
})

app.get("/insect", (req, res) => {
    res.render("templateOne/insect")
})

app.get("/fish", (req, res) => {
    res.render("templateOne/fish")
})

//TEMP2
app.get("/about", (req, res) => {
    res.render("templateTwo/about")
})

app.get("/catalog", (req, res) => {
    res.render("templateTwo/catalog")
})

app.get("/contact", (req, res) => {
    res.render("templateTwo/contact")
})

app.get("/help", (req, res) => {
    res.render("templateTwo/help")
})

app.get("/home", (req, res) => {
    res.render("templateTwo/home")
})


app.listen(port, () => {
    console.log('listening on port', port);
});