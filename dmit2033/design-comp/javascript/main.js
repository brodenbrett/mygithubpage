function toggleNav(){
	var offCanvas = document.querySelector('.offcanvas-menu');

	if(offCanvas.classList.contains('active')){
		offCanvas.classList.remove('active');
	} else {
		offCanvas.classList.add('active');
	}
}