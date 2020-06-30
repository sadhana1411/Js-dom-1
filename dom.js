//examine document object
//console.dir(document);

//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
/*console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

document.all[10].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);;*/

//console.log(document.images);

//GETELEMENTBYID
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';

//headerTitle.style.borderBottom='solid 3px #000';


//GetElemnts bys classs name
/*
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="Hello2"
items[1].style.fontWeight="bold"
items[1].style.backgroundColor='yellow'
//items.style.backgroundColor='#f4f4f4'; //error
for(var i=0;i<items.length;i++)
{
	items[i].style.backgroundColor='#f4f4f4'

}
*/


//get elements by tag name//
/*
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="Hello2";
li[1].style.fontWeight="bold";
li[1].style.backgroundColor='yellow'
//items.style.backgroundColor='#f4f4f4'; //error
for(var i=0;i<li.length;i++)
{
	li[i].style.backgroundColor='#f4f4f4'

}

*/

//query selector
/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc'

var input=document.querySelector('input')
input.value='Hello world';
var submit=document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.color= 'red';


var LastItem=document.querySelector('.list-group-item:last-child');
LastItem.style.color= 'blue';


var SecondItem=document.querySelector('.list-group-item:nth-child(2)');
SecondItem.style.color= 'green';*/

//query selector all
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';


var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length;i++){
	odd[i].style.backgroundColor='#f4f4f4';
	even[i].style.backgroundColor='#ccc';
}




