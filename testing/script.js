

 const container = document.querySelector('#container');
const content = document.createElement('p');
content.classList.add('paragraph');
content.textContent = 'Hey I’m red!';
content.style.color = 'red'
container.appendChild(content);

const heading = document.createElement('h3');
heading.classList.add('header');
heading.textContent = 'I’m a blue h3!';
heading.style.color = 'blue'
container.appendChild(heading); 


const division = document.createElement('div');
division.classList.add('content');
division.style.borderColor = 'black';
division.style.backgroundColor = 'pink';
const header = document.createElement('h1');
header.textContent = 'I’m in a div';
division.appendChild(header);
const paragraph = document.createElement('p');
paragraph.textContent = 'Me too!';
paragraph.style.color = 'blue';
division.appendChild(paragraph);

container.appendChild(division);  


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");











