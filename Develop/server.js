
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


var notes = []

   
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
}); 
  
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});
 
  
app.get("/api/notes", function(req, res) { });



app.get("/api/notes/:id", function(req, res) { });



app.post("/api/notes", function(req, res) { });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

