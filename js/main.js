const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = (params) => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
}

const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.textContent = year
}

handleCurrentYear()

navBtn.addEventListener('click' , handleNav)

