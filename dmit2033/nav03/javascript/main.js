//Toggle menu nav
var nav = document.querySelector('aside:first-child');
var body = document.querySelector('body');

function openNav() {
	nav.style.marginLeft = '0';
	document.querySelector('body').style.marginLeft = '200px';

}
function closeNav() {
	nav.style.marginLeft = '-200px';
	body.style.marginLeft = '0';
}