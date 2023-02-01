import modal from "./modules/modals";
import {showModalByTime} from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modal(".popup-design", ".button-design");
    modal(".popup-consultation", ".button-consultation");
    showModalByTime(".popup-consultation", 5000);
});