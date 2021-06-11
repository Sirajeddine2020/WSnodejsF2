/* Hello, World! program in node.js */
// console.log("Hello, World!")


// var fs = require("fs");
// // fs is the file system module we will see it later
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Sync Program Ended");

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
// //this is the callBack function
//    if (err) return console.error(err);
//    console.log(data.toString());
//   //  console.log(data);
// });

// console.log("Program Ended with async read");

var fs = require("fs");
var fetchNotes = () => {
   try {
     return JSON.parse(fs.readFileSync('notes.txt'));
   } catch (err) {
    return [];
   }
 }
//  console.log(fetchNotes()) ;


// var fs = require("fs");
// var fetchNotes=()=>{
// fs.readFile('notes.txt', function (err, data) {
// //this is the callBack function
//    if (err) return console.error(err);
//    return (data.toString());
// });

// console.log("These are the notes actually");
// }



var writeNotes=(title, body)=>{
   var notes=fetchNotes();
  
   // console.log(notes);
   var note ={
      title,
      body
   }
   var doubles=notes.filter((el)=>el.title===title);
   if (doubles.length===0){
      notes.push(note);
      fs.writeFileSync("notes.txt", JSON.stringify(notes));
      logNote(note);
      // console.log(notes);
   }else {
      console.log("Sorry, a note with same title already exists!" )
   }
}



var logNote = (note) => {
   console.log("********************************");
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
 }

  // writeNotes("Meriam", "Aida");


var removeNote = (title) => {
   var notes = fetchNotes();
 
   var filteredNotes = notes.filter((note) => note.title !== title);
 
   fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
   console.log(filteredNotes);
 }
 
//  removeNote('Meriam');


 //afficher une seule note sachant son title
 var readNote = (title) => {
   var notes = fetchNotes();
 
   var filteredNotes = notes.filter((note) => note.title === title);
 
   logNote(filteredNotes[0]);
 }

//  readNote('shopping');

//  readNote('note2');
 
 //afficher toutes les notes mais une par une 
 var getAll = () => {
   var notes = fetchNotes();
 
   notes.forEach((note) => logNote(note));
 }
// console.log( getAll());


