document.getElementById("convertButton").addEventListener("click", function(){
  var temperature = parseFloat(document.getElementById("temperatureInput").value);
  var unit = document.getElementById("unitSelect").value;
  var convertedTemperature = 0;
  
  if (isNaN(temperature)) {
    document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    return;
  }
  
  if (unit === "celsius") {
    convertedTemperature = temperature * 9/5 + 32;
    document.getElementById("result").innerHTML = convertedTemperature + "°C";
  } else if (unit === "fahrenheit") {
    convertedTemperature = (temperature - 32) * 5/9;
    document.getElementById("result").innerHTML = convertedTemperature + "°F";
  } else if (unit === "kelvin") {
    convertedTemperature = temperature + 273.15;
    document.getElementById("result").innerHTML = convertedTemperature + " K";
  }
});


