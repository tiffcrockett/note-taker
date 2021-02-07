var noteData = require("../data/db.json");
const { v4: uuidv4 } = require('uuid');
var path = require("path");
const fs = require("fs");

module.exports = function(app) { 

  //returns contents of noteData back to the client
  app.get("/api/notes", function(req, res) {
    res.json(noteData); 

  
  app.post("/api/notes", function(req, res) { 

    noteData.id = uuidv4;
    // instantiate noteData
    const newNoteData = join(noteData, noteData.id);
    // id

    // push note and id, only write newNote
    if(newNoteData) {
      newNoteData.push(req.body)
      res.json(true);
    } 

    fs.writeFileSync('../data/db.json', function (err, data) {
      if (err) {
          throw err;
      }
      newNotesData = data;
      });
   });
    
  app.delete('/api/notes/:id', checkNoteExists, (req, res) => {
    const { id } = req.params.id; 

    const noteDataIndex = note.findIndex(n => n.id == id); 

    noteData.splice(noteDataIndex, 1);
   
    return res.send();
    });
  }
)};

