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


