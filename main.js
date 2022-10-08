// console.log(document);

// documnet functions

// getElementById ---> access dom element with JS variable
// const divElement = document.getElementById('div-root');


// divElement.style.color = 'red';
// divElement.style.height = '100px';
// divElement.style.width = '100px';

// background-color 
// divElement.style.background-color = '100px'; wrong do not use this

// divElement.style.backgroundColor = 'blue'; // camel cased css props


// console.log(divElement);


// getElementsByClassName ----> access element with classname
// return array of nodes/elements/tags
// const elements = document.getElementsByClassName('div-item');
// console.log(elements);

// for (var element of elements) {
//   element.style.height = '100px';
//   element.style.width = '100px';
//   element.style.border = '1px solid green';
// }

// querySelector
// nothing but the normal CSS slection
// const divElementTwo = document.querySelector('#div-two'); // query selection

// divElementTwo.style.borderLeft = '5px solid green';
// divElementTwo.style.borderRight = '5px solid yellow';
// divElementTwo.style.borderBottom = '5px solid red';
// divElementTwo.style.borderTop = '5px solid blue';

// console.log(divElementTwo);

// const divThree = document.querySelector('.div-three > div');
// console.log(divThree);


// querySelectorAll
// nothing but the normal CSS slection
// const divElements = document.querySelectorAll('#div-two');
// console.log(divElements);

// const divElementClass = document.querySelectorAll('.div-three');
// console.log(divElementClass);


const inpEle = document.getElementById('inp');
// setAttribute
inpEle.setAttribute('type', 'date');

// set two attribute (src, alt) for img tag with id sample-img
// src --> https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092__340.jpg , alt = 'Virus'

const imageElement = document.getElementById('sample-img');

// imageElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092__340.jpg');
// imageElement.setAttribute('alt', 'virus');


imageElement.src = 'https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092__340.jpg';

imageElement.alt = 'Virus';

imageElement.className = 'sample-image';

const divElement = document.querySelector('div');

divElement.id = "div-set-id";

// DOM manipulation class is taken className

// classes for a div
// using className
// divElement.className = 'bg-green border-10 border-yellow';

// using set attribute
// divElement.setAttribute('class', 'bg-green border-10 border-yellow');

// using classList
// divElement.classList.add('bg-green');
// divElement.classList.add('border-10');
// divElement.classList.add('border-yellow');

// wrong way
// divElement.classList.add('bg-green border-10 border-yellow');

divElement.classList = 'bg-green border-10 border-yellow';

divElement.classList.remove('bg-green');


// innerText ---> adds text content/children to a element
divElement.innerText = "<h1>B39WEENG</h1>";

// innner html will parse the html string and renders   
// divElement.innerHTML = "<h1>B39WEENG</h1>";


// document.body.innerText = "B39WEENG";

// document.body.innerHTML += "<h3>Something</h3>";


// createElement
const anchorTag = document.createElement('a');
// link addres --> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type

anchorTag.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type';
anchorTag.target = '_blank';

anchorTag.innerText = 'Input Type';

const pTag = document.createElement('p');

pTag.innerText = 'Sample Paragraph for appendinfg';

// append and appendChild

// append accepts multiple elements and append one-by-one onto the called parent
// const val = document.body.append(pTag, anchorTag); // returns nothing

const val = divElement.append(pTag, anchorTag);
console.log(val);

const pTagTwo = document.createElement('p');

pTagTwo.innerText = ' pTagTwo Sample Paragraph for appendinfg';
// appendChild
// accepts only one element and appends on to the calling parent

const value = document.body.appendChild(pTagTwo); // returns the appended element/child
console.log(value); // now use the variable to do manipulation






