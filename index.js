let unOrdered = document.querySelector('.unOrdered')
let url1 = `https://www.moogleapi.com/api/v1/characters/search?name=`

let randomResultName = document.querySelector('#second-Spot')
let randomImg = document.querySelector('#second-Img')

document.querySelector('#button').addEventListener('click', getChoice)
document.querySelector('#randomButton').addEventListener('click', getRandom)

function getChoice() {

  let inputName = document.getElementById("getInfoInput").value.toLowerCase()

  let resultContainer = document.getElementById("third-Spot")

  fetch(url1)
      .then(res => res.json()) 
      .then(data => {
        //console.log(data)

        let names = data.map(character => character.name);

        let matchedCharacter = data.find(character => character.name.toLowerCase() === inputName);
        console.log(matchedCharacter)
        if (matchedCharacter) {

          resultContainer.innerText = matchedCharacter.name
          document.querySelector('#third-Img').src = matchedCharacter.pictures[0].url

        } else {
          resultContainer.innerHTML = "No character found.";
        }

        let sortedNames = names.sort()
        sortedNames.forEach(name => {
        let listItem = document.createElement('li')
        listItem.textContent = name
        unOrdered.appendChild(listItem)
      })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    
}

function getRandom() {

  fetch(url1)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)

        let names = data.map(character => character.name);

        let random = Math.floor(Math.random() * data.length)
        
        console.log(data[random])
      
        randomResultName.innerText = data[random].name
        randomImg.src = data[random].pictures[0].url

        let sortedNames = names.sort()
        sortedNames.forEach(name => {
        let listItem = document.createElement('li')
        listItem.textContent = name
        unOrdered.appendChild(listItem)


      })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    
}