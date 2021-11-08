var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 3000);
}

const modal = document.querySelector('.modal');
const cross = document.querySelector('.cross');
const signin = document.querySelector('.signin');

signin.addEventListener('click', () => {
	modal.style.opacity = 1;
});

cross.addEventListener('click', () => {
	modal.style.opacity = 0;
});
