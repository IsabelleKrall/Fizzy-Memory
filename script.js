//Function for randomize the cards in card-box:
var container = document.querySelector('.grid-container')

for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}
