let button = document.querySelector('.hamburger')

let navLinks = document.querySelector('.nav-links')


let toggleButton = ()=>{
    let currentButton = button.src
    let newButton = 'http://127.0.0.1:5500/Navbar/ICON/Cross.png'

    return (currentButton===newButton? button.src = 'http://127.0.0.1:5500/Navbar/ICON/Hamburger.png': button.src = newButton  )
}


button.addEventListener('click',()=>{

    toggleButton()

    navLinks.classList.toggle('active')
})

