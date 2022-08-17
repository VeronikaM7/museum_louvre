const hamburger = document.querySelector('.hamburger-btn');
const menuNavigation = document.querySelector('.header__adaptive-block');

hamburger.addEventListener('click', function(){
	hamburger.classList.toggle('active');
	menuNavigation.classList.toggle('active');
})