//Toggle menu nav
var body = document.querySelector('body'); //webpage
var sideNav = document.querySelector('.side-nav'); //sidebar
var icon = document.querySelector('.icon'); //menu button

function toggleNav(){
	if(sideNav.style.width = '200px' && body.style.marginLeft == '200px'){		
		sideNav.style.width = '0px'; //slide out the nav
		body.style.marginLeft = '0px'; //move the page into place
		icon.classList.remove('rotate'); //rotate the icon upright
	} else {
		sideNav.style.width = '200px'; //slide in the nav
		body.style.marginLeft = '200px'; //move the page over
		icon.classList.add('rotate'); //rotate the icon sideways
	}
}