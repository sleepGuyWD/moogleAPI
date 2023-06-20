let unOrdered = document.querySelector('#unOrdered')
let url1 = `https://www.moogleapi.com/api/v1/characters/search?name=`

document.querySelector('#button').addEventListener('click', getChoice)
document.querySelector('#randomButton').addEventListener('click', getRandom)

async function getChoice() {
  try {
  let inputName = document.getElementById("getInfoInput").value.toLowerCase()
  let resultContainer = document.getElementById("third-Spot")
  let descChoice = document.querySelector('#descChoice')
  

    const res = await fetch(url1)
    const data = await res.json()
        console.log(data)

        let matchedCharacter = data.find(character => character.name.toLowerCase() === inputName);

        if (matchedCharacter) {

          resultContainer.innerText = matchedCharacter.name
          document.querySelector('#third-Img').src = matchedCharacter.pictures[0].url

        } else {
          resultContainer.innerHTML = "No character found.";
        }

        descChoice.innerText = matchedCharacter.description

        let names = data.map(character => character.name);

        const uniqueArray = names.filter((value, index, self) => self.indexOf(value) === index)

        let sortedNames = uniqueArray.sort()

        sortedNames.forEach(name => {
        let listItem = document.createElement('li')
        listItem.textContent = name
        unOrdered.appendChild(listItem)
      })
      }
      catch(err)  {
        console.log(`error ${err}`)
      }
  
}

function getRandom() {

  let randomResultName = document.querySelector('#second-Spot')
  let randomImg = document.querySelector('#second-Img')
  let descRandom = document.querySelector('#descRandom')

  fetch(url1)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        
        let random = Math.floor(Math.random() * data.length)
        console.log(data[random])

        randomResultName.innerText = data[random].name
        randomImg.src = data[random].pictures[0].url
        descRandom.innerText = data[random].description



        let names = data.map(character => character.name);

        const uniqueArray = names.filter((value, index, self) => self.indexOf(value) === index)

        let sortedNames = uniqueArray.sort()
        
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