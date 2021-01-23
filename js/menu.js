(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");

    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.addEventListener('click', () => {
        menuBtnRef.classList.toggle("is-open");
  });
  
})();