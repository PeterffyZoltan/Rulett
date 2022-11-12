let kerekHelyzet = 0;
let labdaForgHelyzet = 0;
let porgete = false;
const kerek = document.getElementById('kerek');
const labdaWrap = document.getElementById('labda-wrapper');
const labda = document.getElementById('labda');
let nyertesszam;
const rulettSzamokSorrend = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
function porget() {

    if (porgete) {
        return 0;
    }
    porgete = true
    labdamegall = false
    labdaHelyzet = 1;
    osszPorgetes = Math.floor(Math.random()*(1080-720+1)+720)
    
    forgatas = setInterval(() => {
        let forgatasMerteke = (360/37/10) *( osszPorgetes/360*3);
        
        kerekHelyzet += forgatasMerteke; 
        if(labdaHelyzet < 20 ){
            labdaForgHelyzet += -1*(forgatasMerteke);
            labdaHelyzet += 0.1;
        }
        else if(!labdamegall){
            labdaHelyzet = 20;
            labdamegall = true;
            labdaMegakad();
        }
        else{
            labdaForgHelyzet += forgatasMerteke;
        }

        osszPorgetes -= forgatasMerteke;
        if (kerekHelyzet> 360) {
            kerekHelyzet = 0;
        }
        if (labdaForgHelyzet< 0) {
            labdaForgHelyzet = 360;
        }
        if(labdaForgHelyzet > 360){
            labdaForgHelyzet = 0;
        }
    
        kerek.style.rotate = String(kerekHelyzet)+ "deg";
        labdaWrap.style.rotate = String(labdaForgHelyzet)+ "deg";
        labda.style.top = String(labdaHelyzet) + "%";
        if (osszPorgetes < 10) {
            porgete = false;
            clearInterval(forgatas)

        }
    }, 15);    
 
}

function labdaMegakad(){
    nyertesszam = Math.round( (labdaForgHelyzet)/ ( 360/37 )- (kerekHelyzet / (360/37)))


    labdaForgHelyzet = (nyertesszam * (360/37)) + kerekHelyzet;
    nyertesszam = rulettSzamokSorrend[(nyertesszam+37)%37]
}


