//Toggle menu nav
var body = document.querySelector('body');
var sideNav = document.querySelector('.side-nav');
var icon = document.querySelector('.icon');

function toggleNav(){
	if(sideNav.style.width = '200px' && body.style.marginLeft == '200px'){		
		sideNav.style.width = '0px';
		body.style.marginLeft = '0px';
		icon.classList.remove('rotate');
	} else {
		sideNav.style.width = '200px';
		body.style.marginLeft = '200px';
		icon.classList.add('rotate');
	}
}