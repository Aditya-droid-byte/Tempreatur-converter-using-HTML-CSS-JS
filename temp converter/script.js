const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value
    const celToFah = (cel) => {
        let fahrenhite = Math.round((cel * 9/5) + 32);
        return fahrenhite;
    }
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5/9);
        return celsius;
    }
    let result;
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `${result}Fahrenhite`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `${result}Celsius`;
    }
}
