
const unitConverter = {
    mToFt: function(num)
    {
        return num*3.280839895;
    },
    kgToLb : function(num)
    {
        return num*2.20462;
    },
    cToF : function(num)
    {
        return (num*(9/5))+32;
    }
};

document.getElementById('convert').onclick = () =>
{
    // alert("Hi");
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let conversionType = document.getElementById("conversionType").value

    let convertedValue;
      if (conversionType === 'mToFt')
        {
            convertedValue = unitConverter.mToFt(inputValue)
        }
        else if(conversionType === 'kgToLb')
         {
            convertedValue = unitConverter.kgToLb(inputValue)
        }
        else{
            convertedValue = unitConverter.cToF(inputValue)
        }

         document.getElementById("convertedValue").textContent = convertedValue.toFixed(2);

    }



// function MetersToFeet(num)
// {
//     return Math.round(num*3.280839895,2);
// }

// function KilogramToLbs(num)
// {
//     return Math.round(num*2.20462,2);
// }

// function celsiusToFahrenheit(num)
// {
//     return Math.round(((num*(9/5))+32),2);
// }