const firstURL = 'https://api.pexels.com/v1/search?query=moon'
const secondURL = 'https://api.pexels.com/v1/search?query=wolf'
const cardImg = document.getElementsByClassName('card-img-top')
const firstButton = document.getElementById('load-1')
const secondButton = document.getElementById('load-2')

const replaceImgs = (photos) => {
  const arrayImgs = photos.photos
  console.log(arrayImgs)
  arrayImgs.forEach((photo) => {
    cardImg = photo.src.medium
  })
}

const getImgs = () => {
  fetch(firstURL, {
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
      console.log(data)
      replaceImgs(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

firstButton.addEventListener('click', getImgs)
