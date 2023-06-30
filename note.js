
let noteArr = []

let noteEl = document.getElementById("note-el")
const saveBtn = document.getElementById("save-btn")
let ul_EL = document.getElementById("ul-el")
let delBtn = document.getElementById("del-btn")
const notesFromLocalStorage = JSON.parse( localStorage.getItem("noteArr") )

if(notesFromLocalStorage){
    noteArr = notesFromLocalStorage
    renderNote(noteArr)
}

saveBtn.addEventListener("click", function(){
    if(noteEl.value === ""){
        alert("Write Something!")
    }
    else{        
    noteArr.push(noteEl.value)
    noteEl.value = ""
    localStorage.setItem("noteArr", JSON.stringify(noteArr) )
    renderNote(noteArr)
    }
})

delBtn.addEventListener("click", function(){
    localStorage.clear()
    noteArr.pop(noteEl.value)
    renderNote(noteArr)
})

function renderNote(notess){
    let listItems = ""
    for (let i = 0; i<notess.length; i++){
        listItems +=`<li> ${notess[i]} </li>`
    }
    ul_EL.innerHTML = listItems
}