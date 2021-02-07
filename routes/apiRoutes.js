var noteData = require("../db/db.json");
var uuid = require('uuid-random');
var path = require("path");
const fs = require("fs");
// const { rawListeners } = require("process");

module.exports = function(app) { 

  //returns contents of noteData back to the client
  app.get("/api/notes", function(req, res) {
    res.json(noteData); 
  });
  
  app.post("/api/notes", function(req, res) { 

    const newNoteData = req.body;
    const noteFile = path.join(__dirname, "db/db.json");
    noteData.id = uuid();
    noteData.push(newNoteData);
    
    fs.writeFile(noteFile, JSON.stringify(noteData), (err) => {
      if (err) 
          throw err;
            console.log('Error')
      }); 

      res.send(newNotesData);
   });
    
  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id; 
    const noteFile = path.join(__dirname, "db/db.json");

    const noteDataIndex = noteData.findIndex(noteData => noteData.id == id); 
    noteData.splice(noteDataIndex, 1); 

    fs.writeFile(noteFile, JSON.stringify(noteData), (err) => {
      if (err) 
          throw err; 
            console.log('Error')
      }); 
   
    return res.send();
  });
}
