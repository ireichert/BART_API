const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    // url that asks the question you want to ask. In this case, give me
    // a list of all of the BART stations:
    const url = 'https://api.bart.gov/api/stn.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            //DO SOMETHING COOL WITH YOUR DATA
            json = json.root
            console.log(json)
            //console.log(json.stations.station)
            /*json.stations.station.forEach((station) => {
                //1. Create the element you want to add to the DOM.
                const option = document.createElement("option")

                //2. Assign data to some part of the element:
                option.innerHTML = station.name
                option.value = station.abbr

                //3. Append the newly created element to the DOM somewhere:
                document.getElementById('station_list').appendChild(option)
            })*/
        /*})
        .catch((err) => {
            console.log(err)
        })*/
})
}


makeStationList()
