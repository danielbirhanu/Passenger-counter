let countEl = document.getElementById("count-el")
let saveEntries = document.getElementById("save-el")

let count = 0

function increment(){
    count++
    countEl.innerText = count
}


function save(){
    saveEntries.textContent += count + " - " 
    countEl.innerText = 0
    count = 0
}
