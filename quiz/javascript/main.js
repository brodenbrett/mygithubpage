function toggleAnswers() {
	var answers = document.querySelectorAll('.answer');

	for (var i = 0; i < answers.length; i++) {
		answers[i].classList.remove('hidden');
	}

	scroll(0,0)
}