const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector),
    scroll = calcScroll();

    modal.classList.add("animated", "fadeIn");
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; 
    document.body.style.marginRight = `${scroll}px`;
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    
    modal.style.display = "none";
    document.body.style.overflow = ''; 
    document.body.style.marginRight = `0px`;
};

const calcScroll = () => {
    const div = document.createElement('div');

    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;

    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

let timerId = 0;

const showModalByTime = (modalSelector, time) => {
    timerId = setTimeout(() => {
        const modals = document.querySelectorAll("[data-modal]");

        modals.forEach(modal => {
            if (getComputedStyle(modal).display == "none") openModal(modalSelector);
        });
    }, time);

    return timerId;
};

let btnPressed = false;

const openByScroll = (selectorModal, triggerSelector) => {
    window.addEventListener("scroll", () => {
        if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1)) {
           openModal(selectorModal);
           document.querySelector(triggerSelector).remove();
           /* document.querySelector(selectorModal).click(); */
        }
    });
};

const modal = (modalSelector, triggerSelector,  destroy = false) => {
    const modal = document.querySelector(modalSelector),
          triggers = document.querySelectorAll(triggerSelector);

   
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();

            btnPressed = true;

            openModal(modalSelector);
            clearInterval(timerId);

            if (destroy) trigger.remove();
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('cross') == '') {
            closeModal(modalSelector);
        }
    });
};

export default modal;
export {showModalByTime, openByScroll};
