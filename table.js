var bets = new Object();
var bets = {};
var bet = 500;
var allMoney = 5000;
const elsoTizenketto = [1,2,3,4,5,6,7,8,9,10,11,12];
const masodikTizenketto = [13,14,15,16,17,18,19,20,21,22,23,24];
const harmadikTizenketto = [25,26,27,28,29,30,31,32,33,34,35,36];
function betNumber(num) {
    if (allMoney>= bet) {
        if (bets[num.innerText] >= bet*35) {
            bets[num.innerText] += bet*35;
        }else{
            bets[num.innerText] = bet*35;
    
        }
        allMoney-=bet;
        console.log(bets);
        
    }
}
function betDozen(dozen) {
    if (allMoney>= bet) {
        dozen = dozen.innerText.replace(' ','_');
        if (bets[dozen] >= bet*2) {
            bets[dozen] += bet*2;
        }else{
            bets[dozen] = bet*2;

        }
        allMoney-=bet;
        console.log(bets);
    }
}
function betFiftyPercent(field) {
    if (allMoney>= bet) {
        if (' ' in field){
            field = field.innerText.replace(' ','_');
        }else{
            field = field.innerText;
        }
    
        if (bets[field] >= bet*1) {
            bets[field] += bet*1;
        }else{
            bets[field] = bet*1;
    
        }
        allMoney-=bet;
    
        console.log(bets);
    }
}
function betColumn(column) {
    if (allMoney>=bet) {
        column = column.innerText.replace(' ','_');
        if (bets[column] >= bet*1) {
            bets[column] += bet*1;
        }else{
            bets[column] = bet*1;
    
        }
        allMoney-=bet;
    
        console.log(bets);
        
    }
}





















function hoverDozen(dozen) {
    Nums = []
    if(dozen.innerText == "1st 12"){
        Nums = document.getElementsByClassName('elsoTizenketto');

    }
    else if(dozen.innerText=="2nd 12"){
        Nums = document.getElementsByClassName('masodikTizenketto');

    }
    else{
        Nums = document.getElementsByClassName('harmadikTizenketto');

    }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = 'yellow';
        
    }
    
}
function noHoverDozen(dozen) {
    Nums = [];
    if(dozen.innerText == "1st 12"){
        Nums = document.getElementsByClassName('elsoTizenketto');
    }
    else if(dozen.innerText=="2nd 12"){
        Nums = document.getElementsByClassName('masodikTizenketto');
    }
    else{
        Nums = document.getElementsByClassName('harmadikTizenketto');

    }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = '';
        
    }
}
function hoverHalf(half) {
    Nums = []
    if (half.innerText == "1 to 18") {
        Nums = document.getElementsByClassName('elsoFele');
    }
    else if (half.innerText == "19 to 36") {
        Nums = document.getElementsByClassName('masodikFele');
        }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = 'yellow';
        
    }
}
function noHoverHalf(half) {
    Nums = []
    if (half.innerText == "1 to 18") {
        Nums = document.getElementsByClassName('elsoFele');
    }
    else if (half.innerText == "19 to 36") {
        Nums = document.getElementsByClassName('masodikFele');
        }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = '';
        
    }
}
function hoverColumn(col) {
    Nums = [];
    if (col.innerText== '1st column') {
        Nums = document.getElementsByClassName('elsoOszlop');
    }
    else if(col.innerText == '2nd column'){
        Nums = document.getElementsByClassName('masodikOszlop');
    }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = 'yellow';
    }
}
function noHoverColumn(col) {
    Nums = [];
    if (col.innerText== '1st column') {
        Nums = document.getElementsByClassName('elsoOszlop');
    }
    else if(col.innerText == '2nd column'){
        Nums = document.getElementsByClassName('masodikOszlop');
    }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = '';
    }
}