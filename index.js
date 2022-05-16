let meterToFeet = document.getElementById("value-mf");
let feetToMeter = document.getElementById("value-fm");
let literToGallon = document.getElementById("value-lg");
let gallonToLiter = document.getElementById("value-gl");
let kiloToPound = document.getElementById("value-kp");
let poundToKilo = document.getElementById("value-pk");

let initialVal;

function toFeet(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let feet = initialVal * 3.281;
    let result = feet.toFixed(3);
    meterToFeet.textContent = initialVal + " meters = " + result + " feet"
}

function toMeter(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let meter = initialVal / 3.281;
    let result = meter.toFixed(3);
    feetToMeter.textContent = initialVal + " feet = " + result + " meters"
}

function toGallon(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let gallon = initialVal / 3.785;
    let result = gallon.toFixed(3);
    literToGallon.textContent = initialVal + " liters = " + result + " gallons"
}

function toLiter(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let liter = initialVal * 3.785;
    let result = liter.toFixed(3);
    gallonToLiter.textContent = initialVal + " gallons = " + result + " liters"
}

function toPound(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let pound = initialVal * 2.205;
    let result = pound.toFixed(3);
    kiloToPound.textContent = initialVal + " kilos = " + result + " pounds"
}

function toKilo(){
    initialVal = parseInt(document.querySelector("#initial-val").value);
    let kilo = initialVal / 2.205;
    let result = kilo.toFixed(3);
    poundToKilo.textContent = initialVal + " pounds = " + result + " kilos"
}

function updateValues(){
    toFeet();
    toMeter();
    toGallon();
    toLiter();
    toPound();
    toKilo();
}

document.querySelector("#initial-val").addEventListener('change', updateValues);