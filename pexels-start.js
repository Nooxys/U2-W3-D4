const cardImg = document.querySelectorAll('.card-img-top')
const allEditButtons = document.querySelectorAll(
  '.btn-group .btn-sm:nth-of-type(2)'
)
const inputField = document.getElementById('custom-search-input')
const buttonField = document.getElementById('custom-search-button')
const all9mins = document.querySelectorAll('small')
console.log(all9mins)
console.log(allEditButtons)
console.log(cardImg)
const firstButton = document.getElementById('load-1')
const secondButton = document.getElementById('load-2')

// allEditButtons.forEach((button) => {
//   button.innerText = 'Hide'
// })
const getImgs = (query) => {
  fetch('https://api.pexels.com/v1/search?query=' + query, {
    headers: {
      authorization: '3gAvQUa830BcITMAJ0NXzwxqQlXmCmw1RK8Q8LAy6bPviMmY5r31UqIU',
    },
  })
    .then((response) => {
      console.log('response', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella chiamata')
      }
    })
    .then((data) => {
      cardImg.forEach((card, i) => {
        card.src = data.photos[i].src.medium
      })

      allEditButtons.forEach((button) => {
        button.innerText = 'Hide'
        button.addEventListener('click', (event) => {
          event.target.closest('.col-md-4').remove()
        })
      })
      all9mins.forEach((label, i) => {
        label.innerText = data.photos[i].id
      })

      console.log('DATA', data)
    })
    .catch((err) => {
      console.log(err)
    })
}

firstButton.addEventListener('click', () => {
  getImgs('moon')
})

secondButton.addEventListener('click', () => {
  getImgs('wolfs')
})

buttonField.addEventListener('click', () => {
  getImgs(inputField.value)
})
