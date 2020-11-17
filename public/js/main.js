const loader = document.querySelector('.loader');

//const figure = document.querySelector('figure');

// const pushingPixels = document.querySelector('.loading');

const main = document.querySelector('.main');

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';

		//  figure.style.opacity = 0;
		//  figure.style.display = 'none';

		// pushingPixels.style.opacity = 0;
		// pushingPixels.style.display = 'none';

		main.style.display = 'block';
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 2000);
}

init();
