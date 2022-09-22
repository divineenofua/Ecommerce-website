
// FOR PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
	loader.style.display= "none";
});
const modal = doument.getElementById('modal');
const modalCloseBtn = doument.getElementById('times');
const openModal =document.getElementById("open-modal");

// MODAL EVENT LISTENERS
openModal.addEventListener("click", () => {
	modal.classList.add('show-modal');
})
// modalCloseBtn.addEventListener("click", () => {
// 	modal.classList.remove('show-modal');
// })
modalCloseBtn.addEventListener('click', () => {
	modal.style.display = "none";
 });

// notification popup
const notificationPopUp = document.getElementById("notification");
const closeNotification = document.querySelector(".uil-times");
// notification event listener
closeNotification.addEventListener("click", () => {
	notificationPopUp.classList.add('closed');
});



