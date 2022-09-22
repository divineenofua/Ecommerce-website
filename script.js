
// FOR PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
	loader.style.display= "none";
});
const modalShow = document.getElementById("modal");
const modalCloseBtn = document.getElementById('times');
const openModal =document.getElementById("open-modal");

// MODAL EVENT LISTENERS
// openModal.addEventListener("click", () => {
// 	modalShow.classList.add('show-modal');
// })
modalCloseBtn.addEventListener("click", () => {
	modalShow.classList.remove('show-modal');
})
// modalCloseBtn.addEventListener('click', () => {
// 	modal.style.display = "none";
//  });

// notification popup
const notificationPopUp = document.getElementById("notification");
const closeNotification = document.getElementById("notifi-close");
// notification event listener
closeNotification.addEventListener("click", () => {
	notificationPopUp.classList.add('closed');
});



