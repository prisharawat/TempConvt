document.getElementById('convertButton').addEventListener('click', function() 
{
    const temperature = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = '';
  
    if (!isNaN(temperature)) 
    {
      if (conversionType === 'celsiusToFahrenheit') 
      {
        result = (temperature * 9/5) + 32 + '°F';
      } 
      else if (conversionType === 'fahrenheitToCelsius') 
      {
        result = ((temperature - 32) * 5/9) + '°C';
      } 
      else 
      {
        alert('Please select a valid conversion type.');
      }
  
      document.getElementById('result').textContent = result;
    }
    else 
    {
      alert('Please enter a valid temperature.');
    }
  });
