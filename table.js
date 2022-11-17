var bets = new Object();
var bets = {};
var bet = 500;
var allMoney = 5000;
var oneRound = 0;
const elsoTizenketto = [1,2,3,4,5,6,7,8,9,10,11,12];
const masodikTizenketto = [13,14,15,16,17,18,19,20,21,22,23,24];
const harmadikTizenketto = [25,26,27,28,29,30,31,32,33,34,35,36];
const feketek = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
const pirosak = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const elsoOszlop = [1,4,7,10,13,16,19,22,25,28,31,34];
const masodikOszlop = [2,5,8,11,14,17,20,23,26,29,32,35];
const harmadikOszlop = [3,6,9,12,15,18,21,24,27,30,33,36];
const parosok = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
const paratlanok = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
function betNumber(num) {
    if (allMoney>= bet) {
        if (bets[num.innerText] > 0) {
            bets[num.innerText] += bet*35;
        }else{
            bets[num.innerText] = bet*35;
    
        }
        allMoney-=bet;
        oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
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
            oneRound+=bet;
        }
}
}



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
            oneRound+=bet;
        }
        else if(column.innerText = '2nd column'){
            for (let index = 0; index < masodikOszlop.length; index++) {
                const element = masodikOszlop[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1
                } else{
                    bets[element] = bet*1
                }
            }
            allMoney-=bet;
            oneRound+=bet;
        }
        else{
            for (let index = 0; index < harmadikOszlop.length; index++) {
                const element = harmadikOszlop[index];
                if (bets[element] > 0) {
                    bets[element] += bet*1
                } else{
                    bets[element] = bet*1
                }
            }
            allMoney-=bet;
            oneRound+=bet;
        }
    }
}








function hoverColors(field) {
    Nums = [];
    if (field.innerText == 'RED') {
        Nums = document.getElementsByClassName('piros');
    }
    else{
        Nums = document.getElementsByClassName('fekete');
    }
    for (let index = 0; index < Nums.length; index++) {
        const element = Nums[index];
        element.style.backgroundColor = 'yellow';
    }
}
function noHoverColors(field) {
    Nums = [];
    if (field.innerText == 'RED') {
        Nums = document.getElementsByClassName('piros');
    }
    else{
        Nums = document.getElementsByClassName('fekete');
    }
    for (let index = 0; index < Nums.length; index++) {
        const element = Nums[index];
        element.style.backgroundColor = '';
    }
}

function hoverEvenOdd(field) {
    Nums = [];
    if (field.innerText == 'ODD') {
        Nums = document.getElementsByClassName('paros');
    }
    else{
        Nums = document.getElementsByClassName('paratlan');
    }
    for (let index = 0; index < Nums.length; index++) {
        const element = Nums[index];
        element.style.backgroundColor = 'yellow';
    }
}
function noHoverEvenOdd(field) {
    Nums = [];
    if (field.innerText == 'ODD') {
        Nums = document.getElementsByClassName('paros');
    }
    else{
        Nums = document.getElementsByClassName('paratlan');
    }
    for (let index = 0; index < Nums.length; index++) {
        const element = Nums[index];
        element.style.backgroundColor = '';
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
    else{
        Nums = document.getElementsByClassName('harmadikOszlop');
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