let openButton = document.getElementById("openModal");
let closeButton =  document.getElementsByClassName("close-modal")[0];
let firstDiv =  document.getElementsByClassName("modal")[0];

function openModal(){
	firstDiv.classList.add('active');
}

function closeModal() {
    firstDiv.classList.remove('active');
}


openButton.addEventListener("click" , openModal);
closeButton.addEventListener("click", closeModal);
