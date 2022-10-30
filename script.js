
// FOR PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
	loader.style.display= "none";
   setTimeout(() => {
   modalShow.classList.add("show-modal")
}, 7000);


});
const modalShow = document.getElementById("modal");
const modalCloseBtn = document.getElementById('times');
const openModal =document.getElementById("open-modal");
// modal
modalCloseBtn.addEventListener('click', () => {
modalShow.classList.remove("show-modal")
});


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
const closeMenu1 = document.getElementById("close1");
const accordBtn = document.getElementById("data-accord-btn");
// close nav
const mobileMenu = document.getElementById("data-mobile-menu");
closeMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("active");
});
// close setting
closeMenu1.addEventListener("click", () => {
	mobileSettingMenu.classList.remove("active");
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
// setting bar
const mobileSettingMenu = document.getElementById("data-mobile-setting");
const mobileSettingOpen = document.getElementById("mobile-setting-open");
mobileSettingOpen.addEventListener("click", () => {
	mobileSettingMenu.classList.add("active");
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

// add to cart
const addCart = document.querySelectorAll(".uil-shopping-cart");
const spanCount = document.querySelector(".count-cart");


let spanCounted  = 0;
function updateSpan(span_count){
   spanCounted = span_count;
   spanCount.innerHTML= span_count;
} 


const body = document.getElementById("body");


// toggle mode
 const toggleMode = document.querySelector('.fa-toggle-off');
 const toggle = document.querySelector('.fa-toggle-on');
 toggleMode.addEventListener("click", () => {
   toggleMode.style.display= "none";
   toggle.style.display = "block";
   body.style.background = "rgba(0,0,0,0.9)";
   body.style.color = "white";
 });
 toggle.addEventListener("click", () => {
   toggleMode.style.display= "block";
   toggle.style.display = "none";
   body.style.background = "white";


 });
 

