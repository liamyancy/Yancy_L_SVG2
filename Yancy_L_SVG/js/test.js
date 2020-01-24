(() => {

	const mySpan = document.querySelector('main span'),
		  myObject =document.querySelector('.svg-img');

// functionality goes here
	function toggleSelection() {
		//debugger;
		this.classList.toggle("selected");
	}

//figure out what triggers will drive the functionality
	mySpan.addEventListener('click', toggleSelection);
	myObject.addEventListener('click', toggleSelection);
})()