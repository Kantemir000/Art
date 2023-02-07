import modal from "./modules/modals";
import {showModalByTime, openByScroll} from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modal(".popup-design", ".button-design");
    modal(".popup-consultation", ".button-consultation");
    modal(".popup-gift", ".fixed-gift", true);
    showModalByTime(".popup-consultation", 5000);
    openByScroll(".popup-gift", ".fixed-gift");
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
});