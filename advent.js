//this list will hold all the boxes we have alrady clicked on
let daysOpened = JSON.parse(localStorage.getItem('dayClicked'));

const icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];
// this variable holds all of the HTML elements for the boxes

const boxes = document.querySelectorAll('.num')


// this function will show the emoji for the given day that was
//clicked

function handleBoxClick(event){

const boxClicked = event.currentTarget;

const dayClicked = boxClicked.dataset.day	

console.log(event.currentTarget.dataset.day);

//variable to hold the current date 
const today= new Date();
//only dhow the boxes for the day that ar less than the current date

if(today.getDate() >= Number(dayClicked)){
console.log('yes you can open me.');
boxClicked.innerHTML = icons[Number(dayClicked)];
//store clicked box in local storage


}

else{
console.log('NO Peaking!!! This box can NOT be opened!!!');
}
console.log(today.getDate(), Number(dayClicked));
}
//add eventlistener to each and every box
boxes.forEach(function(box){

box.addEventListener('click', handleBoxClick);

});




console.log(boxes)


//this function will store the days clicked in local storage
function storeClickedBoxes(day){
	//first is their anything in local storage
	if (localStorage.getItem('dayClicked')){
//daysClicked does not exists
	daysOpened = [];
}else{
//there is something in daysClicked

daysOpened = JSON.parse(localStorage.getItem('dayClicked'))
}
	if(!daysOpened.includes(day)){
	dayOpened.push(day);
	localStorage.setItem('dayClicked, JSON.stringfy(daysOpened)')
console.log(daysOpened);

}
function ramdomizeIicons(oldList){
//check to see if the icons list has been radomized
if(!localStorage.getItem('icons')){
while(oldList.length > 0){ //while there are still thing in my old list
const index = Math.floor(Mathrandom()*oldList.length);
//add the old item to the random list
randomList.push(oldList[index]);
//remove it from the old list
oldList.splice(index,1); //start at index and remove 1 item from the list
}
localStorage.setItem('icons',JSON.stringify(randomList));
}
}
}



//todo ------>
//radomize list of icons
// have the browser remeber what days we have already clicked.


//this function will reset the calendar
function resetCalendar(){
//only reset if the say yes to a prompt
const answer = confirm('Are you sure you want to reset the calendar? This action cannot be undone.');
if (answer){
//clear all items in localStorage
localStorage.clear();
//reload the page
document.location.reload();
}
}//end of resetCalendar

//Add reset Button to the bottom of the Calendar
//create the button element
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Calendar';
//addand event listener to call reset Calender
resetButton.addEventListner('click', resetCalendar);
//place the button on the page
//grab the footer
const footer = document.querySelector('footer');
//add the button to the footer after the opening footer tag
footer.insetAdjacentElement('afterbegin', resetButton);
//afterbegin, beforebegin, beforeend, afterend


//add a little style
footer.style.textAlign = 'center';
footer.style.paddingTop = '20px';
