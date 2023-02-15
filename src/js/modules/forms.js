import postData from "../services/services";

const forms = (formSelector) => { 
    const AllForms = document.querySelectorAll(formSelector),
        upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };
    
    const resetData = () => {
        AllForms.forEach(form => form.reset());

        upload.forEach(item => item.previousElementSibling.textContent = "Файл не выбран");
    };

    const addNameFile = () => {
        
        
        upload.forEach(item => {
            item.addEventListener("input", () => {
                const arr = item.files[0].name.split('.');
                const dots = arr[0].lenght > 6 ? '...' : '.';
                const name = arr[0].substring(0, 7) + dots + arr[1];
                
                item.previousElementSibling.textContent = name;
            });
        });
    };
    addNameFile();

    const bindPostData = form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            form.style.display = 'none';

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentElement.prepend(statusMessage);

            const messageInfo = document.createElement('div');
            messageInfo.innerText = message.loading;
            statusMessage.prepend(messageInfo);

            const messageImg = document.createElement('img');
            messageImg.src = message.spinner;
            statusMessage.prepend(messageImg);

            const formData = new FormData(form);
            /* const json = JSON.stringify(Object.fromEntries(formData.entries())); */
            let api = form.closest('.popup-design') || form.classList.contains('calc_form') ? path.designer : path.question;
            console.log(api);

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    messageInfo.innerText = message.success;
                    messageImg.src = message.ok;
                }).catch(() => {
                    messageInfo.innerText = message.failure;
                    messageImg.src = message.fail;
                }).finally(() => {
                    resetData();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                    }, 5000);
                });
        });    
    };

    AllForms.forEach(form => bindPostData(form));
};

export default forms;


