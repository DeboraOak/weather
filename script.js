const container = document.querySelector('.flex-container')
const erro = document.querySelector('.erro')
function requisition(){
    let queryValue = document.querySelector('.txtSearch').value

    if(queryValue.length === 0) {
        queryValue = 'Recife, Pernambuco'
    }

    fetch("http://api.weatherstack.com/current?access_key=dc3b52aa45eea929ef6726f3ee8ef6b3&query="+queryValue)
        .then(data => data.json())
        .then(info => {

            if(info.current) {

                erro.innerHTML = ''

                if(container.style.display === 'none') {
                    container.style.display = 'block'
                }

                const temp = document.querySelector('.temperature')
                const quer = document.querySelector('.city')
                const feli = document.querySelector('.feelsLike')
                const wind = document.querySelector('.wind')
                const humi = document.querySelector('.humidity')
        
                temp.innerHTML = `${info.current.temperature}°C`
                quer.innerHTML = `Clima em ${info.request.query}`
                feli.innerHTML = `Sensação de ${info.current.feelslike}°C`
                wind.innerHTML = `Vento ${info.current.wind_speed} km/h`
                humi.innerHTML = `Humidade ${info.current.humidity}%`
            } else {
                container.style.display = 'none'
                erro.innerHTML = "Nenhum resultado encontrado."
            }

        }) 
}

document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.querySelector(".btnSearch").click()
    }
})

requisition()