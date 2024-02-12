// document.getElementById("changeText").addEventListener("click", function() {
//     document.getElementById("demo").textContent =
//         "You've learned how to change this text using JavaScript!";
// });

// Change the text content and style of the paragraph
function changeTextAndStyle() {
    const demoParagraph = document.getElementById("demo");
    demoParagraph.textContent = "You've learned how to manipulate the DOM with JavaScript!";
    demoParagraph.style.color = "blue";
    demoParagraph.style.fontWeight = "bold";
}

// Add a new element to the DOM
function addNewElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added by JavaScript!";
    newElement.style.color = "green";
    document.body.appendChild(newElement);
}

// Remove an element from the DOM
function removeElement() {
    const demoParagraph = document.getElementById("demo");
    if (demoParagraph) {
        demoParagraph.remove();
    }
}

// Listen for clicks on the 'Change Text' button
document.getElementById("changeText").addEventListener("click", function() {
    changeTextAndStyle();
    addNewElement();
    // Uncomment the next line to enable element removal:
    // removeElement();
});

// Example of listening for a mouseover event
document.getElementById("changeText").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});

document.getElementById("changeText").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#008CBA";
});
