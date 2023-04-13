const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numPeople = Number(numberOfPeople.innerText);
let totalCost = 0;

const calculateBill = () => {
    let billTotal = Number(billTotalInput.value);
    let tip = Number(tipInput.value)/100;
    
    totalCost = billTotal + billTotal*tip;

    perPersonTotal.innerText = "$" + (totalCost/numPeople).toFixed(2);
}

const increasePeople = () => {
    numPeople++;
    numberOfPeople.innerText = numPeople;
    perPersonTotal.innerText = "$" + (totalCost/numPeople).toFixed(2);
}

const decreasePeople = () => {
    if(numPeople!=1){
        numPeople--;
        numberOfPeople.innerText = numPeople;    
    }
    perPersonTotal.innerText = "$" + (totalCost/numPeople).toFixed(2);
}