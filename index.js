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

    const carsTemplateText = document.querySelector('.carsTemplate');
    const carsTemplate = Handlebars.compile(carsTemplateText.innerHTML);
    const carsElem = document.querySelector('.cars');
    axios.get('https://api-tutor.herokuapp.com/v1/cars?_limit=30')
    .then(result => {
        const cars = result.data;
        carsElem.innerHTML = carsTemplate({
            cars
        });
    });

    axios.get(`https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg`)
    .then(result =>{
        const data = result.data;
        carsElem.innerHTML = carsTemplate({
            pic: data
        })
    })

document.querySelector('.search').addEventListener('click', async () => {
    const color = document.querySelector('#colors:checked');
    const make = document.querySelector('#makes:checked');
    
    console.log(make.value);
    if(make.value){
        await axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${make.value}`)
        .then(result => {
            const data = result.data;
            carsElem.innerHTML = carsTemplate({
                cars: data
            })
        })
    }
    
    if(color.value){
        await axios.get(`https://api-tutor.herokuapp.com/v1/cars/color/${color.value}`)
        .then(result =>{
            const data = result.data;
            carsElem.innerHTML = carsTemplate({
                cars: data
            })
        })
    }
    if(color.value && make.value){
        await axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${make.value}/color/${color.value}`)
        .then(result =>{
            const data = result.data;
            carsElem.innerHTML = carsTemplate({
                cars:data
            })
        })
    }
 

})


  


