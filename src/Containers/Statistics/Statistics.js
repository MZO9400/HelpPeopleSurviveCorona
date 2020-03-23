const axios = require("axios");

axios({
  method: "GET",
  url:
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "6031df45bfmshc5765d0ea25d076p1365efjsne5a49e4220bd"
  },
  params: {
    country: "Pakistan"
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
