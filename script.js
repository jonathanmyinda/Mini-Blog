const pubTitle = document.getElementById("pubTitle")
const pubImage = document.getElementById("pubImage")
const pubAddBtn = document.getElementById("pubAddBtn")
const pubLive = document.getElementById("pubLive")

pubAddBtn.addEventListener("click", ()=> {
   let div = document.createElement("div") 
   let image = document.createElement("img")
   image.src = pubImage.value
   div.innerHTML = `
   <h2>${pubTitle.value}</h2>
   <img src="${image}" alt="image">
   <button type="button" class="pubDelete">Supprimer</button>
    `
pubLive.appendChild(div)
})