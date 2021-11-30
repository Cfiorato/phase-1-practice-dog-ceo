console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function (response) {
      return response.json()
    })
    .then(function (json){
      let images = json.message
      images.forEach((item) => {
        let img = document.createElement('img')
        img.src = item
        document.querySelector('#dog-image-container').appendChild(img)
      })
    })
})

document.addEventListener("DOMContentLoaded", function(){
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function (response){
      return response.json()
    })
    .then(function (json){
      let breeds = json.message
      for (breed in breeds){
        let li = document.createElement('li')
        li.textContent = breed
        document.querySelector('#dog-breeds').appendChild(li)
      }
    })
})

document.addEventListener("DOMContentLoaded", () => {
  let breeds = document.querySelector('#dog-breeds')
  breeds.addEventListener('click', function(e){
    e.target.style.color = "red"
  })
})

