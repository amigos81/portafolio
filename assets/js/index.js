const btnMenu = document.getElementById('btn-menu')
btnMenu.onclick = function () {
    navmenu.classList.toggle('show-menu')
}

/* NavBar */
const navbar = document.querySelector('.nav')
const links = document.querySelectorAll('.list-link')

navbar.addEventListener('click', function (e) {

    if (e.target.closest('.list-link')) {
        for (const link of links) {
            link.parentElement.classList.remove('active')
        }

        e.target.parentElement.classList.add('active')
    }
})


// **********************************************


const btnDark = document.querySelector('.btn-theme')


const theme = window.localStorage.getItem('theme')

if (theme) {
  document.body.classList.add('dark')
  changeTheme(true)
} else {
  document.body.classList.remove('dark')
  changeTheme(false)
}

btnDark.addEventListener('click', function () {
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    changeTheme(true)
  } else {
    changeTheme(false)
  }
})

function changeTheme (bool) {
  if (bool) {
    btnDark.firstElementChild.classList.remove('bxs-moon')
    btnDark.firstElementChild.classList.add('bxs-sun')
    window.localStorage.setItem('theme', 'dark')
  } else {
    btnDark.firstElementChild.classList.remove('bxs-sun')
    btnDark.firstElementChild.classList.add('bxs-moon')
    window.localStorage.removeItem('theme')
  }
}