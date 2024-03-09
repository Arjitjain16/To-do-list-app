let inputs = document.getElementById("input-text")
let listContainer = document.getElementById("list-container")

function addtask(){
    if(inputs.value === ""){
        alert("Please Enter task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputs.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputs.value = ""
    saveData()
}

listContainer.addEventListener("click" , (e) =>{

    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
} , false)

function saveData(){
    localStorage.setItem ('data', listContainer.innerHTML)
}
function showlist (){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask
