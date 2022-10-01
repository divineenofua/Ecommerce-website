
// FOR PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
	loader.style.display= "none";
});
const modalShow = document.getElementById("modal");
const modalCloseBtn = document.getElementById('times');
const openModal =document.getElementById("open-modal");



// notification popup
const notificationPopUp = document.getElementById("notification");
const closeNotification = document.getElementById("notifi-close");
// notification event listener
closeNotification.addEventListener("click", () => {
	notificationPopUp.classList.add('closed');
});

// mobile menu
const showList =document.querySelectorAll("#plus");
const HideList =document.getElementById("minus");
const accordMenu = document.getElementById('accord-menu');
const closeMenu = document.getElementById("close");
const accordBtn = document.getElementById("data-accord-btn");
// close nav
const mobileMenu = document.getElementById("data-mobile-menu");
closeMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("active");
});
// show & hide menu list
const menuShowList = document.querySelectorAll('.show-menu');
menuShowList.forEach(faq => {
    faq.addEventListener('click', () => {
         faq.classList.toggle('active');

        //  change icon
        const icon = faq.querySelector('.list-icon i');
        if(icon.className === 'uil uil-plus') {
           icon.className = "uil uil-minus";
         } else{
            icon.className = "uil uil-plus";
         }
		 

    })
})

// open mobile menu
const mobileMenuOpen = document.getElementById("mobile-menu-open");
mobileMenuOpen.addEventListener("click", () => {
	mobileMenu.classList.add("active");
});


// open category
const mobileMenuSideBar = document.querySelector('.sidebar')
const categoryOpen = document.getElementById('grid');
categoryOpen.addEventListener('click', () => {
   mobileMenuSideBar.classList.add('active');
});
const closeSideBar = document.getElementById("close-sidebar");
closeSideBar.addEventListener("click", () => {
	mobileMenuSideBar.classList.remove("active");
});


// sidebar
const sideMenuBar = document.querySelectorAll(".sidebar-menu-category");
sideMenuBar.forEach(item => {
   item.addEventListener('click', () =>{
      item.classList.toggle('active');

      const icon = item.querySelector('.icon-list i');
     if(icon.className === 'uil uil-plus'){
      icon.className = 'uil uil-minus';
     }else{
      icon.className = 'uil uil-plus';
     }

   })
})