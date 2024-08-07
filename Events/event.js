//A better way to handle events in JS are 
/* node.event = () => {
    //code
    }*/
let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log('Button 1 Clicked and this code is run through a different JS script ');
// }

// let btn2 = document.querySelector('#btn2');
// btn2.ondblclick = () => {
//     console.log('Button 2 was double clicked and this code is also run through a diff JS script');
// }

// let div = document.querySelector('div');
// div.onmouseover = () => {
//     console.log('Mouse over the div');
// }

/*If a Html code has inlined handled event and a JS Script is also handling the same event, then priority will be given
the JS Script*/
/*In the same code or script we cannot handle the same event more than once or else the code will be overwritten*/
//for example
// btn1.onclick = () => {
//     console.log('This is Overwritten');
// }




//EVENT OBJECT

/*It is a special object that has details about the event.
All event handlers have access to the Events Object's properties and methods*/
/*node.event = (e) => {
    //handle here
    }*/
//example - e.target, e.type, e.clientX, e.clientY

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// div.onmouseover= (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }




//Event Listeners

/*node.addEventListener(event, callback)
node.removeEventListener(event, callback)*/


const handler = () => {
    console.log('Button 1 was Clicked');
}
btn1.addEventListener('click', handler);

btn1.addEventListener('click', () =>{
    console.log('This depicts 2nd Event Listener');
});
/*Thus we can add two or more than two events for a same element and handle them with callback functions at the same 
time*/

btn1.addEventListener('click', (evt) =>{
    console.log(evt.type);
});
/*We can also handle event objects within Event Listeners*/


btn1.removeEventListener('click', handler);




//Practice Questions

/*1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.*/

let modebtn = document.querySelector('#btn3');
let currentMode = 'light';
modebtn.addEventListener('click', () =>{
    if(currentMode === 'light'){
        currentMode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black';
    }else{
        currentMode = 'light';
        document.querySelector('body').style.backgroundColor = 'white';
    }
    console.log(currentMode);
});