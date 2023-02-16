const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keydown', function(e) { 
            try {
                if (e.key.match(/[^а-яё 0-9]/ig) && e.code != 'Backspace') {
                    e.preventDefault();
                }
            } catch {}
        });
    });
};

export default checkTextInputs;