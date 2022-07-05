const menu = document.querySelector('.menu-icon')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle('move')
})

window.addEventListener('scroll', () => {
  navbar.classList.remove('open-menu')
  menu.classList.remove('move')
})

// Reviews Swiper
var swiper = new Swiper('.reviews-content', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// Email JS
function validate() {
  let name = document.querySelector('.name')
  let email = document.querySelector('.email')
  let msg = document.querySelector('.message')
  let sendBtn = document.querySelector('.send-btn')

  sendBtn.addEventListener('click', event => {
    event.preventDefault()

    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror()
    } else {
      sendmail(name.value, email.value, msg.value)
      success()
    }
  })
}

validate()

function sendmail(name, email, msg) {
  emailjs.send('service_dwas7c6', 'template_6hyoka4', {
    from_name: email,
    to_name: name,
    message: msg
  })
}

function emptyerror() {
  swal({
    title: 'Oh não...',
    text: 'Os campos não podem ficar vazios!',
    icon: 'error'
  })
}

function success() {
  swal({
    title: 'Email enviado com sucesso!',
    text: 'Responderei em 24 horas',
    icon: 'success'
  })
}

// Header Background Change On Scroll
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    header.classList.add('header-active')
  } else {
    header.classList.remove('header-active')
  }
})

// Scroll Top
const scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
  if (scrollY >= 400) {
    scrollTop.classList.add('scroll-active')
  } else {
    scrollTop.classList.remove('scroll-active')
  }
})

// Dark/Light Mode

const bodyLight = document.querySelector('body')
const darkLighToggle = document.querySelector('.light-dark-mode')

darkLighToggle.addEventListener('click', () => {
  bodyLight.classList.toggle('light')
})

// Current Year
let currentYear = document.querySelector('.current-year')

let present = new Date()
present.getFullYear()
currentYear.innerHTML = `${present.getFullYear()}`
