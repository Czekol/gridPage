const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')
const footerYear = document.querySelector('.footer__year')

const handleNav = params => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	body.classList.toggle('stop-scrool')

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			body.classList.remove('stop-scrool')
            navBtn.classList.remove('is-active')
            navMobile.classList.remove('nav-mobile--active')
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
