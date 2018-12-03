//Function for randomize the cards in card-box:
var container = document.querySelector('.grid-container')

for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}

//Make selected cards visable:
const visable = document.querySelectorAll('.card-box');

const visableArray = Array.from(visable);

guess = [];
completed = [];
counter = 0;


//Show the selected cards when clicking:
visableArray.forEach( (picture)=> {
  picture.addEventListener('click', ()=>{
    picture.classList.add('flip');
    picture.classList.add('view-picture');
  });

//Select 2 cards and see if they match:

picture.addEventListener('click', (event) =>{
  guess.push(event.target.dataset.number);
  completed.push(picture);

  if (guess.length === 2) {
    container.classList.add('stop');

    setTimeout(function(){
      container.classList.remove('stop');
    },900);

    if (guess[0] === guess[1]) {
      completed[0].classList.add('match');
      completed[1].classList.add('match');

      guess = [];
      completed = [];
      counter++
      }
      // If two cards dont match, hide the elements:
      else {
        setTimeout(function(){
          completed[0].classList.remove('view-picture');
          completed[0].classList.remove('flip');
          completed[1].classList.remove('flip');
          completed[1].classList.remove('view-picture');
          guess=[];
          completed=[];
        },1200);
      }
    }
  })

  const button = document.querySelector('.play-again');
  visableArray.forEach((picture)=>{
    button.addEventListener('click', (event)=>{
      picture.classList.remove('flip');
      picture.classList.remove('view-picture');
      picture.classList.remove('completed');
      picture.classList.add('rotate');
      container.classList.add('shake');
      guess = [];
      completed = [];
      counter = 0;
      setTimeout(function(){
        container.classList.remove('shake');
        picture.classList.remove('rotate');
      },500);

      setTimeout(function(){
        for (var i = container.children.length; i >= 0; i--) {
          container.appendChild(container.children[Math.random() * i | 0]);
        }
      },500);

    })
  })
});
