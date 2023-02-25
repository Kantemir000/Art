import { postData } from "../services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    
    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const highlite = input => {
        input.closest('.file_upload').firstElementChild.classList.add("animated", "flash");
    };

    const unhighlite = input => {
        input.closest('.file_upload').firstElementChild.classList.remove("animated", "flash");
    };

    const postImg = (e, input) => {
        if (e.dataTransfer) {
            input.files = e.dataTransfer.files;
        }

            const arr = input.files[0].name.split('.');
            const dots = arr[0].lenght > 6 ? '...' : '.';
            const name = arr[0].substring(0, 7) + dots + arr[1];
            
            input.previousElementSibling.textContent = name;
            if(input.closest('form').getAttribute('data-post') === 'instant') {
                const formData = new FormData(input.closest('form'));

                postData("assets/server.php", formData) 
                    .then((res) => {
                        console.log(res);
                        input.previousElementSibling.textContent = 'Пожалуйста, свяжитесь с нами!';
                    })
                    .catch((error) => {
                        console.log(error);
                        input.previousElementSibling.textContent = 'Ошибка';
                    })
                    .finally(() => {
                        setTimeout(() => {
                            input.previousElementSibling.textContent = 'Файл не выбран';
                        }, 5000);
                    });
            }
    };
    
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlite(input));
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlite(input));
        });
    });

    ['drop', 'input'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, (e) => postImg(e, input));
        });
    });
};

export default drop;