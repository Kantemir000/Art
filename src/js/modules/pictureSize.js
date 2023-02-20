const pictureSize = pictureSelector => {
    const pictures = document.querySelectorAll(pictureSelector);

    const showPicture = picture => {
        const img = picture.querySelector('img'),
            dataImg = picture.querySelectorAll('p:not(.sizes-hit)');

        img.src = img.src.slice(0, -4) + '-1.png'; //img.png => img-1.png
        dataImg.forEach(data => data.style.display = 'none');
    };

    const hidePicture = picture => {
        const img = picture.querySelector('img'),
            dataImg = picture.querySelectorAll('p:not(.sizes-hit)');

        img.src = img.src.slice(0, -6) + '.png'; //img-1.png => img.png
        dataImg.forEach(data => data.style.display = 'block');
    };

    pictures.forEach(picture => {
        picture.addEventListener('mouseover', () => showPicture(picture));
        picture.addEventListener('mouseout', () => hidePicture(picture));
    });
};

export default pictureSize;