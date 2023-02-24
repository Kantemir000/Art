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

    fileInputs.forEach(input => {
        input.addEventListener('drop', e => {
            input.files = e.dataTransfer.files;

            const arr = input.files[0].name.split('.');
            const dots = arr[0].lenght > 6 ? '...' : '.';
            const name = arr[0].substring(0, 7) + dots + arr[1];
            
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;