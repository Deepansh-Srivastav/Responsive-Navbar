let button = document.querySelector('.hamburger')

let navLinks = document.querySelector('.nav-links')


button.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})