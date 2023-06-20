const container = document.getElementById("container");
const searchSubmit = document.getElementById("searchSubmit");
const searchInput= document.getElementById("searchInput");
const degreeNumber = document.getElementById("degreeNumber");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const timezone = document.getElementById("timezone");
const date = document.getElementById("date");
const min = document.getElementById("min");
const max = document.getElementById("max");

// Conseguir la API

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error('Ocurrió un error', error);   
})