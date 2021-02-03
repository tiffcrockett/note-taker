
var noteData = require("../data/db.json");


module.exports = function (app) {

  
  app.get("/api/notes", function(req, res) {
      return res.json(notes);
   });
  
  app.post("/api/notes", function(req, res) { 
    if (noteData) {
        noteData.push(req.body);
        res.json(true);
        }        
   });
    

  app.delete("/api/notes/:id", function(req, res) { });
  
  
