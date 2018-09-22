//Select DOM items for manipulation

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


//Set initial state of the menu
let showMenu = false;

//listen for click on menu button
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {

    //Add appropriate class to each item when menu button is clicked
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    //Add show class to each nav item in the menu
    navItems.forEach(item => item.classList.add('show'));

    //Set menu state
    showMenu = true;
  } else {
    //Remove classes when open menu is closed
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    //remove show class from each nav item in the menu
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}


