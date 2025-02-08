let openButton = document.getElementById("openModal");
let closeButton =  document.getElementsByClassName("close-modal")[0];
let firstDiv =  document.getElementsByClassName("modal")[0];

let modalContent = document.getElementById("modal-content");

modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});

function openModal(){
	firstDiv.classList.add('active');
}

function closeModal() {
    firstDiv.classList.remove('active');
}


openButton.addEventListener("click" , openModal);
closeButton.addEventListener("click", closeModal);
document.addEventListener("click", function(event) {
    if (firstDiv.classList.contains('active') && !firstDiv.contains(event.target) && event.target !== openButton) {
        closeModal();
    }
});
