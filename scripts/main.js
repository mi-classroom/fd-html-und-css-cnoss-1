/* Menu
############################################################################ */

const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');
const mainMenu = document.querySelector('[data-js-main-menu-target]');

menuOpenButton.addEventListener('click', () => {
  mainMenu.classList.add('is-active');
});

menuCloseButton.addEventListener('click', () => {
  mainMenu.classList.remove('is-active');
});

/* On Page Navigation
############################################################################ */

const sectionHeadlines = document.querySelectorAll("[data-js-page-content] > section > h2");
const pageNavigationMenu = document.querySelector('[data-js-page-navigation-menu]');

if (pageNavigationMenu) {
  sectionHeadlines.forEach((headline) => {
    
    const navigationItem = document.createElement('li');
    const navigationLink = document.createElement('a');
    navigationLink.innerText = headline.innerText;

    navigationItem.appendChild(navigationLink);
    pageNavigationMenu.appendChild(navigationItem);
  });

}
    

