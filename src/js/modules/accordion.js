const accordion = btnsSelector => {
    const btns = document.querySelectorAll(btnsSelector);

    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            

            this.classList.toggle("active-heading");
            this.nextElementSibling.classList.toggle("active-content");

            if (this.classList.contains("active-heading")) {
                btns.forEach(btn => {
                    if (btn !== this) {
                        btn.classList.remove("active-heading");
                        btn.nextElementSibling.classList.remove("active-content");
                        btn.nextElementSibling.style.maxHeight = "0";
                    }
                });
                
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = "0";
            }
            
        });
    });
};

export default accordion;