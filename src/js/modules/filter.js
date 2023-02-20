const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        pictureAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


    const filterPictures = picturesSelector => {
        const pictures = document.querySelectorAll(picturesSelector);
        console.log(pictures);

        pictureAll.forEach(picture => {
            picture.style.display = "none";
            picture.classList.remove("animated", "fadeIn");
        });

        no.style.display = "none";
        no.classList.remove("animated", "fadeIn");

        if (pictures[0]) {
            pictures.forEach(picture => {
                picture.style.display = "block";
                picture.classList.add("animated", "fadeIn");
            });
        } else {
            no.style.display = "block";
            no.classList.add("animated", "fadeIn");
        }
        
    };

    const activeBtn = (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

            filterPictures(`.portfolio-block.${target.className.split(' ')[0]}`);
        };
    };

    menu.addEventListener('click', activeBtn);
};

export default filter;