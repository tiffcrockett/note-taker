var noteData = require("../data/db.json");

module.exports = function(app) {

  
  app.get("/api/notes", function(req, res) {

    var notes;
    fs.readFile('../data/db.json', function read(err, data) {
        if (err) {
            throw err;
        }
        notes = data;
  
   });
  
  app.post("/api/notes", function(req, res) { 
    if (noteData) {
        noteData.push(req.body);
        res.json(true);
        }        
   });
    
  app.delete('/api/notes/:id', checkNoteExists, (req, res) => {
    const { id } = req.params;
   
    const noteIndex = note.findIndex(n => n.id == id);
   
    notes.splice(noteIndex, 1);
   
    return res.send();
    });
  }
)}