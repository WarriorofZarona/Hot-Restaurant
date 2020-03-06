var express=require("express");
var path=require("path");
var app= express();
const PORT =   process.env.PORT || 9898;

app.use(express.urlencoded({
     extended: true })
     );
app.use(express.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/table", function (req, res) {
    
    res.sendFile(path.join(__dirname, "../table.html"));
});
app.get("/reservation", function (req, res) {
    
    res.sendFile(path.join(__dirname, "../reservation.html"));
});
require("./express/apitable")(app);
require("./express/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


