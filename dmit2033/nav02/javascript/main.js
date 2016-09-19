//Toggle menu nav
function myFunction() {
	var x = document.querySelector('header nav');
	if (x.className == ""){
		x.className = "responsive";
	} else {
		x.className = ""
	}
}