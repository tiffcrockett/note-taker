var path = require("path");
const fs = require("fs"); 
var noteData = require("../db/db.json");
var uuid = require('uuid-random'); 

module.exports = app => { 

  app.get("/api/notes", (req, res) => { 
    res.send(noteData);
  });
  
  app.post("/api/notes", (req, res) => { 

    let newNoteData = req.body;
    const noteFile = path.join(__dirname, "../db/db.json");
    
    noteData.id = uuid();
    noteData.push(newNoteData);
    
    fs.writeFile(noteFile, JSON.stringify(noteData, null, 4), err => {
      if (err) 
          throw err;
      }); 
  
      res.send(newNoteData)
  });
    
  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id; 
    const noteFile = path.join(__dirname, "../db/db.json");

    const noteDataIndex = noteData.findIndex(noteData => noteData.id == id); 
    noteData.splice(noteDataIndex, 1); 

    fs.writeFile(noteFile, JSON.stringify(noteData, null, 4), (err) => {
      if (err) 
          throw err; 
      }); 
   
    res.send();
  });
}