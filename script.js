//Function for randomize the cards in card-box:
var container = document.querySelector('.grid-container')

for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}



//Make selected cards visable:
const visable = document.querySelectorAll('.card-box');

const visableArray = Array.from(visable);

emptyarray = [];
complete = [];
counter = 0;


//Show the selected cards when clicking:
visableArray.forEach( (picture)=> {
  picture.addEventListener('click', ()=>{
    picture.classList.add('view-picture')
  });
});
