console.log("HELLO WE ARE BACK!");
alert("ABHI SEEKH RHA HU BRO");
console.log(window);
window.console.log("Hello World!");/*all the functions such as console.log, alert, etc, ... are part of 
// window object, that's why we do not always specify 'window' while writing our code*/

/* console.dir() -> used to print the properties and methods of an object */


/* We can access the HTML in JAVASCRIPT within the window in a object called 'document' and this is a 
model (representation) of HTML code and this is hence called DOM */

/*BUT WHY DO WE NEED TO ACCESS THESE OBJECTS OR DOCUMENTS OF HTML/CSS IN JAVASCRIPTS?
  -> Because we can manipulate the HTML/CSS code using JAVASCRIPT during runtime and this is called 
  DOM Manipulation. In simple words using these we can help user make changes or performs certain visible 
  tasks by just interacting with the frontend (html/css) elements. */

//example
document.body.childNodes[1].innerText = "TUVXYZ";