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
        if (dozen.innerText == '1st 12') {
            for (let index = 0; index < elsoTizenketto.length; index++) {
                let element = elsoTizenketto[index];
                if (bets[element] > 0) {
                    bets[element] += bet*2;
                    console.log(bets)
                }
                else{
                    bets[element]= bet*2;
                    console.log(bets)
                }
            }
            allMoney-=bet;
        }
        else if (dozen.innerText == '2nd 12') {
            for (let index = 0; index < masodikTizenketto.length; index++) {
                let element = masodikTizenketto[index];
                if (bets[element] > 0) {
                    bets[element] += bet*2;
                }
                else{
                    bets[element]= bet*2;
                }
            }
            allMoney-=bet;
        }
        else{
            for (let index = 0; index < harmadikTizenketto.length; index++) {
                let element = harmadikTizenketto[index];
                if (bets[element] > 0) {
                    bets[element] += bet*2;
                }
                else{
                    bets[element]= bet*2;
                }
            }
            allMoney-=bet;
        }
    }
}
function betFiftyPercent(field) {
    if (allMoney>= bet) {
        if (field.innerText = '1 to 18') {
            for (let szam = 1; szam < 19; szam++) {
                const element = szam;
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
        else if(field.innerText = '19 to 36'){
            for (let szam = 19; szam < 37; szam++) {
                const element = szam;
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
        else if(field.innerText = 'EVEN'){
            for (let index = 0; index < parosok.length; index++) {
                const element = parosok[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
                
            }
            allMoney-=bet;
        }
        else if(field.innerText = 'ODD'){
            for (let index = 0; index < paratlanok.length; index++) {
                const element = parosok[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
        else if(field.innerText='RED'){
            for (let index = 0; index < pirosak.length; index++) {
                const element = pirosak[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
        else if(field.innerText='BLACK'){
            for (let index = 0; index < feketek.length; index++) {
                const element = feketek[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
}}



function betColumn(column) {
    if (allMoney>=bet) {
        if(column.innerText = '1st column'){
            for (let index = 0; index < elsoOszlop.length; index++) {
                const element = elsoOszlop[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1;
                }else{
                    bets[element] = bet*1;
                }
            }
            allMoney-=bet;
        }
        else if(column.innerText = '2nd column'){

        }
        else{

        }
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
    else{
        Nums = document.getElementsByClassName('harmadikOszlop');
    }
    for (let index = 0; index < Nums.length; index++) {
        Nums[index].style.backgroundColor = '';
    }
}