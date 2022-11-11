const carsTemplateText = document.querySelector('.carsTemplate');
const carsTemplate = Handlebars.compile(carsTemplateText.innerHTML);
const carsElem = document.querySelector('.cars');

axios.get('http://api-tutor.herokuapp.com/v1/cars')
    .then(result => {
        const cars = result.data;
        carsElem.innerHTML = carsTemplate({
            cars
        });
    });

const colorTemplateText = document.querySelector('.colorsTemplate');
const colorsTemplate = Handlebars.compile(colorTemplateText.innerHTML);
const colorElem = document.querySelector('.colors');


axios.get('https://api-tutor.herokuapp.com/v1/colors')
    .then(result => {
        const colors = result.data;
        colorElem.innerHTML = colorsTemplate({
            colors
        });
    });


const makesTemplateText = document.querySelector('.makeTemplate');
const makesTemplate = Handlebars.compile(makesTemplateText.innerHTML);
const makesElem = document.querySelector('.makes');

axios.get('https://api-tutor.herokuapp.com/v1/makes')
    .then(result => {
        const makes = result.data;
        makesElem.innerHTML = makesTemplate({
            makes
        });
    });


