// завдання 1

let openTab = window.open('https://www.w3schools.com', 'w3schools',
'width=300,height=300,left=700,top=200');
setTimeout(() => {
    openTab.resizeTo(500, 500);
} , 2000);
setTimeout(() => {
    openTab.moveTo(200, 200);
}, 4000);
setTimeout(() => {
    openTab.close();
}, 6000);

// завдання 2

let button = document.getElementById('myButton');
let text = document.getElementById('text');

function changeCSS() {
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = "Comic Sans MS";
};

button.onclick = changeCSS;

// завдання 3

let blue = document.getElementById('blue');

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

let pink = document.getElementById('pink');

pink.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
});

let brown = document.getElementById('brown');

brown.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
});
brown.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white';
});

let link = document.getElementById('link');

link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
});

// завдання 4

document.addEventListener('DOMContentLoaded', () => {
    let deleteBtn = document.getElementById('delete');
    let select = document.getElementById('select');
  
    deleteBtn.addEventListener('click', () => {
      let selectedOption = select.options[select.selectedIndex];
      if (selectedOption) {
        select.removeChild(selectedOption);
      };
    });
});

// завдання 5

let liveBtn = document.getElementById('liveBtn');
let result = document.getElementById('result');

liveBtn.addEventListener('click', () => {
    result.innerHTML = 'I was pressed!';
});
liveBtn.addEventListener('mouseover', () => {
    result.innerHTML = 'Mouse on me!';
});
liveBtn.addEventListener('mouseout', () => {
    result.innerHTML = 'Mouse is not on me!';
});
