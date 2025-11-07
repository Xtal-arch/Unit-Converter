const convertBtn = document.getElementById("convert-btn") 
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert") 
const massConvert = document.getElementById("mass-convert")

function convert() {
    const inputNum = document.getElementById("input-num").value
    lengthConvert.innerHTML = `${inputNum.value} meters = ${inputNum.value * 3.281} feet | ${inputNum.value} feet = ${inputNum.value / 3.281} meters`
    volumeConvert.innerHTML = `${inputNum.value} liters = ${inputNum.value * 0.264} gallons | ${inputNum.value} gallons = ${inputNum.value / 0.264} liters`
    massConvert.innerHTML = `${inputNum.value} kilos = ${inputNum.value * 2.204} pounds | ${inputNum.value} pounds = ${inputNum.value / 2.204} kilos`
}

convertBtn.addEventListener("click", convert) 