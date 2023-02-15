import modal from "./modules/modals";
import {showModalByTime, openByScroll} from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modal(".popup-design", ".button-design");
    modal(".popup-consultation", ".button-consultation");
    modal(".popup-gift", ".fixed-gift", true);
    showModalByTime(".popup-consultation", 5000);
    openByScroll(".popup-gift", ".fixed-gift");
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    forms("form");
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});