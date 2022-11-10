const carsTemplateText = document.querySelector('.carsTemplate');
const carsTemplate = Handlebars.compile(carsTemplateText.innerHTML);

const carsElem = document.querySelector('.cars');
 axios.get('http://api-tutor.herokuapp.com/v1/cars')
 .then(result =>{
    const cars = result.data;
    carsElem.innerHTML = carsTemplate({
        cars
    });
 });