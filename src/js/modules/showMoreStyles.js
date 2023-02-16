import { getResourse } from "../services/requests";

const showMoreStyles = (trigger, stylesWrapper) => {
    const btn = document.querySelector(trigger),
        wrapper = document.querySelector(stylesWrapper);

    const createCards = response => {
        response.forEach(({src, title, link}) => {
            const card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            wrapper.append(card);
        });
    };

    btn.addEventListener("click", function() {
        getResourse('http://localhost:3000/styles')
            .then(res => createCards(res)) //res.styles если мы напрямую обращаемся к файлу без сервера
            .catch(error => console.log(error))
            .finally(this.remove()); //аналог e.target.remove() 
    });
};

export default showMoreStyles;