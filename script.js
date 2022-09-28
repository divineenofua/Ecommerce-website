
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
// modalCloseBtn.addEventListener("click", () => {
// 	modalShow.classList.remove('show-modal');
// })
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

// moobile menu
const showList =document.getElementById("plus");
const HideList =document.getElementById("minus");
const subMenu = document.getElementById("data-accord");
const accordMenu = document.getElementById('accord-menu');
const closeMenu = document.getElementById("close");
// close nav
const mobileMenu = document.getElementById("data-mobile-menu");
closeMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("active");
});
// show & hide list
showList.addEventListener("click", () => {
	subMenu.classList.add("active");
	accordMenu.classList.add("active");
});
HideList.addEventListener("click", () => {
	subMenu.classList.remove("active");
	accordMenu.classList.remove("active");

});