const burger = (burgerSelector, menuSelector) => {
    const burger = document.querySelector(burgerSelector),
        menu = document.querySelector(menuSelector);

    menu.style.display = "none";

    burger.addEventListener("click", () => {
        if (menu.style.display == "none" && window.screen.availWidth <= 992) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });

    window.addEventListener("resize", () => { //Если человек разворачивает планшет и ширина становится больше, то меню скрывается.
        if (window.screen.availWidth > 992) {
            menu.style.display = "none";
        }
    });
    
};

export default burger;