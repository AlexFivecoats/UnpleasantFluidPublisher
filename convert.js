window.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() 
{
   document.getElementById('convertButton').addEventListener('click', function() 
      {
         let degreesCelsius = document.getElementById('cInput').value;
         let degreesFahrenheit = document.getElementById('fInput').value;

         if(degreesCelsius != '' && !isNaN(parseFloat(degreesCelsius)))
         {
            debugger;
            degreesFahrenheit = parseFloat(convertCtoF(degreesCelsius));
            document.getElementById('fInput').value = degreesFahrenheit;
            document.getElementById('errorMessage').innerHTML = '';
         }
         else if (degreesFahrenheit != '' && !isNaN(parseFloat(degreesFahrenheit)))
         {
            document.getElementById('cInput').value = convertFtoC(degreesFahrenheit);
            document.getElementById('errorMessage').innerHTML = '';
         }
         else
         {
            debugger;
            document.getElementById('errorMessage').innerHTML = degreesCelsius != '' ? `${degreesCelsius} is not a number` : `${degreesFahrenheit} is not a number`;
         }
            
         if(degreesFahrenheit < 32)
         {
            document.getElementById('weatherImage').setAttribute('src', 'cold.png');
         }
         else if(degreesFahrenheit > 50) 
         {
            document.getElementById('weatherImage').setAttribute('src', 'warm.png');
         }
         else
         {
            document.getElementById('weatherImage').setAttribute('src', 'cool.png');
         }
      }
   )
   document.getElementById('cInput').addEventListener('input', function()
      {
         document.getElementById('fInput').value = '';
      }
   )
   document.getElementById('fInput').addEventListener('input', function()
      {
         document.getElementById('cInput').value = '';
      }
   )
}

function convertCtoF(degreesCelsius) 
{
   return degreesCelsius * (9/5) + 32;
}

function convertFtoC(degreesFahrenheit) 
{
   return (degreesFahrenheit - 32) * (5/9);
}
