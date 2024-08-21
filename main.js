




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ""){
        alert("You must add your task!")
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let spanTag = document.createElement("span");
        spanTag.innerHTML = "\u00d7";
        list.appendChild(spanTag);
    }
    inputBox.value = "";
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

    
}, false);