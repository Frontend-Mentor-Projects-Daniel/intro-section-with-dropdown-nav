export {};

const menuItems = document.querySelectorAll('.tab.has-submenu');
const buttons = document.querySelectorAll('button.with-icon');

function closeTab(element: any) {
  setTimeout(() => {
    element.className = 'tab has-submenu';
  }, 2000);
}

// accessibility for mouse users
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('mouseover', function () {
    menuItem.className = 'tab has-submenu open';
  });

  menuItem.addEventListener('mouseout', function () {
    closeTab(menuItem);
  });
});

// accessibility for keyboard users
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    if (button.parentElement?.className == 'tab has-submenu') {
      button.parentElement.className = 'tab has-submenu open';

      button.previousElementSibling?.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-expanded', 'true');
    } else {
      if (button.parentElement) {
        button.parentElement.className = 'tab has-submenu';
      }

      button.previousElementSibling?.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
