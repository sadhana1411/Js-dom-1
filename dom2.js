//traversing the dom
var itemList=document.querySelector('#items');
//parent node
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundcolor= '#f4f4f4';
console.log(itemList.parentNode.parentNode);
 console.log(itemList.parentNode.parentNode.parentNode);
*/

/*parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundcolor= '#f4f4f4';
console.log(itemList.parentNode.parentElement);
 console.log(itemList.parentElement.parentElement.parentElement);
*/

// childnodes
/*console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstchild
console.log(itemList.firstChild);
///firstelementchild
console.log(itemList.firstElementChild);

//lastchild
console.log(itemList.lastChild);
///firstelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello4'
*/
//next sibling
/*console.log(itemList.nextSibling);
///nexttelement sibling
console.log(itemList.nextElementSibling);
*/

/*//previous sibling
console.log(itemList.previousSibling);

//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red'
*/

//craete element

//create div
var newDiv=document.createElement('div');

// add class
newDiv.className='Hello';

//add id
newDiv.id='Hello1'

//add atr
newDiv.setAttribute('title','hello div');

//create text node
var newDivText= document.createTextNode('Hello world');

// add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header  .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);

















// 




