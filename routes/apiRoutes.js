  
var path = require("path");
const fs = require("fs"); 
var note = require("../db/db.json");
const {v4 : uuidv4} = require('uuid')

module.exports = app => {   

  app.get("/api/notes", (req, res) => {   
    res.send(note)
  }); 

  app.get("/api/notes/:id", function(req, res) {

    var chosen = req.params.notes;
  
    console.log(chosen);
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.send(note[i]);
      }
    }
  
    return res.send(false);
  });

  app.post("/api/notes", (req, res) => { 

    let newNote = req.body;
    const noteFile = path.join(__dirname, "../db/db.json");
    
    note.push(newNote);

    note.id = uuidv4();
    
    fs.writeFile(noteFile, JSON.stringify(note, null, 4), err => {
      if (err) {
        throw err;
      }
         
      }); 
  
      res.send(newNote);
  }); 
  
  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id; 
    const noteFile = path.join(__dirname, "../db/db.json");

    const noteIndex = note.findIndex(note => note.id === id); 
    note.splice(noteIndex, 1); 

    fs.writeFile(noteFile, JSON.stringify(note, null, 4), (err) => {
      if (err) {
        throw err; 
        } 
      }); 
    res.send();
  });
}