## API KEY

    b5a672b8851da776d23772baee6eac92

## URL Example

    api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}
    api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}

    - Exemplo São paulo => 
        - api.openweathermap.org/data/2.5/weather?q=São Paulo,br&appid=b5a672b8851da776d23772baee6eac92 -> Retorno em faryraiti 
        - api.openweathermap.org/data/2.5/weather?q=São Paulo,br&units=metric&lang=pt_br&appid=b5a672b8851da776d23772baee6eac92  -> Retorno em celcius




            mainTemp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            humidity={weather.main.humidity}
            speed={weather.wind.speed}
            direction={weather.wind.deg}
            sunrise={weather.sys.sunrise}
            sunset={weather.sys.sunset}

            desc={weather.weather.description}
            icon={weather.weather.icon}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}