import { getResourse } from "../services/requests";

const calc = (size, material, service, promocode, result) => {
    const sizeBlock = document.querySelector(size), 
        materialBlock = document.querySelector(material), 
        serviceBlock = document.querySelector(service), 
        promocodeBlock = document.querySelector(promocode), 
        resultBlock = document.querySelector(result);
    
    let sum = 0;

    const calcFunc = (e = "", res) => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+serviceBlock.value));

        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (res[0][promocodeBlock.value]){
            resultBlock.textContent = sum * res[0][promocodeBlock.value];
        } else {
            resultBlock.textContent = sum;
        }
    };

    const getDataPromocode = (e) => {
        getResourse('http://localhost:3000/promocode')
            .then(res => calcFunc(e, res))
            .catch(error => console.log(error));
    };

    const getDataPrice = (e) => {
        getResourse('http://localhost:3000/price')
            .then(res => {
                const id = e.target.selectedOptions[0].id;
                const block = document.getElementById(id);

                res.forEach(item => {
                    if (item[id]) block.value = item[id];
                });

                calcFunc(e, res)
                getDataPromocode(); //чтобы при изменении данных сохранилась скидка
            })
            .catch(error => console.log(error));
    };

    sizeBlock.addEventListener("change", getDataPrice);
    materialBlock.addEventListener("change", getDataPrice);
    serviceBlock.addEventListener("change", getDataPrice);
    promocodeBlock.addEventListener("input", getDataPromocode);
};

export default calc;