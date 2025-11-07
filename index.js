const convertBtn = document.getElementById("convert-btn") 
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert") 
const massConvert = document.getElementById("mass-convert")

function convert() {
    const raw = document.getElementById("input-num").value.trim();
    const num  = Number(raw);
    lengthConvert.innerHTML = `${num} meters = ${num * 3.281} feet | ${num} feet = ${num / 3.281} meters`;
    volumeConvert.innerHTML = `${num} liters = ${num * 0.264} gallons | ${num} gallons = ${num / 0.264} liters`;
    massConvert.innerHTML = `${num} kilos = ${num * 2.204} pounds | ${num} pounds = ${num / 2.204} kilos`;
}

convertBtn.addEventListener("click", convert) 
