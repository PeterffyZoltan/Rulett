let kerekHelyzet = 0;
let labdaForgHelyzet = 0;
let porgete = false;
const kerek = document.getElementById('kerek');
const labdaWrap = document.getElementById('labda-wrapper');
const labda = document.getElementById('labda');
let nyertesszam;

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
            labdaHelyzet = 20;
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
    }, 1);    
 
}

function labdaMegakad(){
    nyertesszam = Math.round( Math.abs( (labdaForgHelyzet))/ ( 360/37 )- Math.abs((kerekHelyzet / (360/37))))
    nyertesszam += 37;
    nyertesszam = nyertesszam%37;
    console.log(nyertesszam)
    labdaForgHelyzet = nyertesszam * (360/37) + kerekHelyzet;
}


