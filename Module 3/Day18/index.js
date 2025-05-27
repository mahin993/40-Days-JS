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
document.body.appendChild(pElem);
console.log(pElem);
}

// Insert Elements
const span = document.createElement("span");
span.innerText = "This is span tag added dynamically";

const targetElem = document.getElementById("title");
document.body.insertBefore(span, targetElem)
// document.body.insertBefore(span, targetElem.nextElementSibling);
console.log(targetElem.nextElementSibling);

