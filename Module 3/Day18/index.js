/**
 * What will we learn ?
 * - Creating Elements
 * - Inserting Elements
 * - Modifying Content
 * - Removing Elements
 * - Read, Write and Remove Attributes
 * - Traversing/Navigating DOM
 * - Manipulating Styles
 * - Manipulating Classes
 * - Controlling Visibilities
 */

// Creating Elements
{
const pElem = document.createElement("p");
pElem.innerText = "This is the text added dynamically"
// document.body.appendChild(pElem);
console.log(pElem);
}

// Insert Elements
const span = document.createElement("span");
span.innerText = "This is span tag added dynamically";

const targetElem = document.getElementById("title");
// document.body.insertBefore(span, targetElem)
// document.body.insertBefore(span, targetElem.nextElementSibling);
console.log(targetElem.nextElementSibling);


{
  // Modifying Content
  const pElem = document.querySelector("p");
  pElem.innerHTML = "<u>Hello How</u> are you doing?";

  const divElem = document.querySelector("div");
  console.log("Inner Text", divElem.innerText);
  console.log("Text Content", divElem.textContent);
  
}


{
  // Removing/Replacing Elements
  const list = document.getElementById("myList");
  // console.log(list.children);
  const itemRemove = list.children[0];
  list.removeChild(itemRemove);

  const pElem = document.querySelector("p");
  list.replaceChildren(pElem)


  const remove = document.getElementById('removeMe').remove();

}


{
  // Read, Write, Remove and Check Attributes

  // read
  const imgElem = document.querySelector('img');
  console.log(imgElem.getAttribute('src'));

  // write
  imgElem.setAttribute("src", "m.JPG")
  imgElem.setAttribute("alt", "friends")

  // remove
  // imgElem.removeAttribute("height")
  // imgElem.removeAttribute("width")

  // check
  const hasAttribute = imgElem.hasAttribute("height");
  console.log(hasAttribute);
}

{
// Traversing/Navigating DOM: 
// parentElement and parentNode
const span = document.getElementById('text');
console.log("Parent Element", span.parentElement.parentElement);
console.log("Parent Node", span.parentNode.parentNode);

// children and childnode
const mainDivElem = document.getElementById("main-id");
console.log("Children", mainDivElem.children);
console.log("Child Nodes", mainDivElem.childNodes);

// firstChild and firstElementChild
console.log(mainDivElem.firstChild);
console.log(mainDivElem.firstElementChild);

// nextSibling and nextElementSibling
const ulElem = document.getElementById("list")
console.log(ulElem.nextSibling);
console.log(ulElem.nextElementSibling);

// previousSibling and previousElementSibling
console.log(ulElem.previousSibling);
console.log(ulElem.previousElementSibling);
}



{
  // Manipulating Style
  const pElem = document.getElementById('p-id');
  console.log(pElem.style);

  const mainDivElem = document.getElementById("main-id");
  // mainDivElem.className = "secondary-class"
  // mainDivElem.classList.add("secondary-class")
  // mainDivElem.classList.remove("main-class")
  // mainDivElem.classList.toggle("main-class")
  // mainDivElem.classList.toggle("main-class")
  mainDivElem.classList.replace("main-class", "secondary-class")
  console.log(mainDivElem.classList);
  console.log("Does it have test?", mainDivElem.classList.contains("main-class"));
}

{
  // Controlling Visibility
  const mainDivElem = document.getElementById("main-id");
  // mainDivElem.style.display = "block"

  // mainDivElem.style.display = "hidden"

  mainDivElem.style.opacity = "0.5"

}


