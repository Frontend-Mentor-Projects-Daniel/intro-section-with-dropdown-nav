export {};

// GLOBAL VARIABLES
const navbar = document.querySelector('.header__navbar') as HTMLElement;
const menuButton = document.querySelector('.menu') as HTMLButtonElement;
const menuImage = document.querySelector('.menu > img') as HTMLImageElement;
const tabs = Array.from(
  document.querySelectorAll('.tab.has-submenu')
) as HTMLLIElement[];
const selectButtons = Array.from(
  document.querySelectorAll('button.with-icon')
) as HTMLButtonElement[];
const subMenus = Array.from(
  document.querySelectorAll('.sub-menu')
) as HTMLUListElement[];

// toggle side nav on menu click
menuButton.addEventListener('click', () => {
  navbar.classList.toggle('active');

  if (navbar.className == '[ header__navbar ] active') {
    menuButton.setAttribute('aria-expanded', 'true');

    menuImage.setAttribute('src', './src/assets/images/icon-close-menu.svg');
  } else {
    menuButton.setAttribute('aria-expanded', 'false');

    menuImage.setAttribute('src', './src/assets/images/icon-menu.svg');
  }
});

// open sub-menu on hover
tabs.forEach(function (tab) {
  tab.addEventListener('mouseover', function () {
    tab.className = '[ tab has-submenu ] open';

    if ((tab.className = '[ tab has-submenu ] open')) {
      tab.firstElementChild?.nextElementSibling?.setAttribute(
        'aria-expanded',
        'true'
      );

      tab.firstElementChild?.setAttribute('aria-expanded', 'true');

      tab.firstElementChild?.nextElementSibling?.firstElementChild?.firstElementChild?.setAttribute(
        'href',
        './src/assets/images/sprite.svg#icon-arrow-up'
      );
    }
  });

  tab.addEventListener('mouseout', function () {
    closeTab(tab);
  });
});

// open sub-menu on enter key or click
selectButtons.forEach((button) => {
  button.addEventListener('click', function () {
    if (button.parentElement?.className == '[ tab has-submenu ]') {
      button.parentElement.className = '[ tab has-submenu ] open';

      button.previousElementSibling?.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-expanded', 'true');
      button?.firstElementChild?.firstElementChild?.setAttribute(
        'href',
        './src/assets/images/sprite.svg#icon-arrow-up'
      );
    } else {
      if (button.parentElement) {
        button.parentElement.className = '[ tab has-submenu ]';
      }

      button.previousElementSibling?.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-expanded', 'false');
      button?.firstElementChild?.firstElementChild?.setAttribute(
        'href',
        './src/assets/images/sprite.svg#icon-arrow-down'
      );
    }
  });
});

// FUNCTIONS
// close sub-menu after 2 seconds
function closeTab(tab: any) {
  const timer = setTimeout(() => {
    tab.className = '[ tab has-submenu ]';

    tab.firstElementChild?.nextElementSibling?.setAttribute(
      'aria-expanded',
      'false'
    );

    tab.firstElementChild?.setAttribute('aria-expanded', 'false');
    tab.firstElementChild?.nextElementSibling?.firstElementChild?.firstElementChild?.setAttribute(
      'href',
      './src/assets/images/sprite.svg#icon-arrow-down'
    );
  }, 2000);

  return timer;
}
