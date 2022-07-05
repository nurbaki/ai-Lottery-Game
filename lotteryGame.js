
const numberInput = document.querySelector(".input-lg");
const findBtn = document.querySelector(".find");
const screenUl = document.querySelector(".screen");

numberInput.focus();

let luckyArray = [];
let changeNum = false;


findBtn.onclick = () => {
    let number = numberInput.value;
    if (number < 1 || number > 8) {
        screenUl.textContent = "Please enter a number between 1 and 8";
    }else{
        luckyArray = [];
        findLuckyNumbers(number);
        numberInput.focus();
    }
};

const findLuckyNumbers = (i) => {

    screenUl.textContent = "";
    let luckyNumber;

    for (let index = 0; index < i; index++) {
        for (let index = 0; index < 8; index++) { // sayi arrayinin olusturuldugu kisim
            luckyNumber = Math.round(Math.random()*90);
            luckyArray[index]= luckyNumber;
        };
        for (let index = 0; index < 6; index++) { // array'i siraya sokan kisim 
            if (luckyArray[6] == luckyArray[index]) { // 7. sayi mutlaka farkli olsun
                changeNum = true;  
            }
            for (let index = 0; index < 5; index++) {
                if (luckyArray[index]> luckyArray[index+1]) {
                    let bigNum = luckyArray[index];
                    luckyArray[index] = luckyArray[index+1];
                    luckyArray[index+1] = bigNum;
                };
                if (changeNum) {
                    luckyArray[6] = Math.round(Math.random()*90);
                    changeNum = true;
                }               
            };  
        };
        screen(luckyArray);
        console.log(luckyArray);
    };
}

const screen = (array) => {
      screenUl.innerHTML += `
      <li>
        <p>${array[0]} - ${array[1]} - ${array[2]} - ${array[3]} - ${array[4]} - ${array[5]} | ${array[6]} | ${array[7]}</p>
      </li>`;
};

