const apiKey = '31655a8fb15e67151e0d8e52bbd5ef71';
const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

    .then(res => res.json())
    .then((json) => {
      return json;
    }
    )


}

export default getWeather;
