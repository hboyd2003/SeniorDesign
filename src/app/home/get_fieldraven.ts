const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://swd.weatherflow.com/swd/rest/metadata/network/stations?limit=10000', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));


  // Station Meta Data
  https://swd.weatherflow.com/swd/rest/stations?token=[your_access_token]
  // Station Observation
  https://swd.weatherflow.com/swd/rest/observations/station/[your_station_id]?token=[your_access_token]
  // Device Observation
  https://swd.weatherflow.com/swd/rest/observations/?device_id=[your_device_id]&token=[your_access_token]


  wss://ws.weatherflow.com/swd/data?token=[your_access_token]

  {
    "type": "listen_start",
    "device_id": [your_device_id],
    "id": "random-id-12345"
  }
