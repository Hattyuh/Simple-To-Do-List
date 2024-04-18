const dayButtons = document.getElementById("days");
const day = document.getElementById("day");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something to do to add to to-do!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


 dayButtons.addEventListener("click", function (e) {
     switch(e.target.id) {
        case "monday": 
            day.innerHTML = e.target.id;
            showSavedData();
            break;
        case "tuesday": 
            day.innerHTML = e.target.id;
            showSavedData();
            break;
        case "wednesday": 
            day.innerHTML = e.target.id;
            showSavedData();
            break;
        case "thursday": 
            day.innerHTML = e.target.id;
            showSavedData();
            break;
        case "friday": 
            day.innerHTML = e.target.id; 
            showSavedData();   
            break;
        case "saturday":
            day.innerHTML = e.target.id;
            showSavedData();     
            break;
        case "sunday": 
            day.innerHTML = e.target.id;
            showSavedData();
            break;
    }
   });

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
  });

function saveData() {
    switch(day.innerHTML) {
        case "monday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "tuesday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "wednesday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "thursday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "friday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "saturday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
        case "sunday": 
            localStorage.setItem(day.innerHTML, listContainer.innerHTML);
            break;
    }  
}

function showSavedData() {
    switch(day.innerHTML) {
        case "monday": 
            listContainer.innerHTML = localStorage.getItem("monday");
            break;
        case "tuesday": 
            listContainer.innerHTML = localStorage.getItem("tuesday");
            break;
        case "wednesday": 
            listContainer.innerHTML = localStorage.getItem("wednesday");
            break;
        case "thursday": 
            listContainer.innerHTML = localStorage.getItem("thursday");
            break;
        case "friday": 
            listContainer.innerHTML = localStorage.getItem("friday");
            break;
        case "saturday": 
            listContainer.innerHTML = localStorage.getItem("saturday");
            break;
        case "sunday": 
            listContainer.innerHTML = localStorage.getItem("sunday");
            break;
    }
//    // if (listContainer.innerHTML !== "") {
//         listContainer.innerHTML = localStorage.getItem("data");
//   //  }
}
showSavedData();