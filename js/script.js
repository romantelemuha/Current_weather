const apiKey="81a7c355daf54d36178c634e55045670";
const apiUrl="https://api.openweathermap.org/data/2.5/weather";

let info_input=document.querySelector('.info_input');
let info_button=document.querySelector('.info_button');
let weather_icon=document.querySelector('.weather_icon');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let city_name=document.querySelector('.city_name');
let temperature=document.querySelector('.temperature');

info_button.addEventListener('click', function(){
    let input_value=info_input.value;
    weatherSearch(input_value)
    .then((result)=>{
        humidity.innerHTML=result.main.humidity+"%";
        wind.innerHTML=result.wind.speed+"km/h";
        let img_change=result.weather[0].main.toLowerCase();
        weather_icon.src=`img/${img_change}.png`;
        city_name.innerHTML=result.name;
        temperature.innerHTML=result.main.temp+"°C";
        console.log(result);
    })
    .catch((err)=>{
        console.log(err)
    })
})

async function weatherSearch(city){
    let url=`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const response=await fetch(url);
    const responseToJson=response.json();
    return responseToJson;
}