// Function to change text dynamically
function changeText() {
    document.getElementById("text").textContent = "Text has been changed!";
}

// Function to toggle CSS styles
function toggleStyle() {
    let title = document.getElementById("title");
    title.classList.toggle("highlight");
}

// Function to add a new element
function addElement() {
    let newPara = document.createElement("p");
    newPara.textContent = "New paragraph added!";
    newPara.id = "addedPara"; // Assigning an ID for removal
    document.getElementById("content").appendChild(newPara);
}

// Function to remove the added element
function removeElement() {
    let addedPara = document.getElementById("addedPara");
    if (addedPara) {
        addedPara.remove();
    } else {
        alert("No element to remove!");
    }
}
