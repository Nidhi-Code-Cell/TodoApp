let inputplace=document.querySelector("#inputPlace");
let btn=document.querySelector("button");
let taskContainer=document.querySelector(".task_container");
let notask=document.querySelector("#notask");



function AddTask(){
    if(inputplace.value===""){
        alert("Write some task first");
        return;
    }
    
    else {
        const li=document.createElement("li");
        li.innerHTML=inputplace.value;
        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        taskContainer.appendChild(li);
        inputplace.value="";
        notask.style.display="none";
        saveData()
    }
    

}

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("list_goal");
        saveData()

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        showNotask()
        saveData()
    }
})


function showNotask(){
    if(taskContainer.children.length===0){
        notask.style.display="block";
    }
    else{
        notask.style.display="none";
    }
}

function saveData(){
    localStorage.setItem("mydata",taskContainer.innerHTML)
}


function showData(){
    taskContainer.innerHTML=localStorage.getItem("mydata")
}
showData()
showNotask()
