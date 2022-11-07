let forgatas_merteke = 360/37;
let kerek_helyzet = 0;

function porget() {

    const kerek = document.getElementById('kerek');
    porgetes_merteke = Math.floor(Math.random()*(1080-720+1)+720)

    forgatas = setInterval(() => {
        let forgatas_merteke = (360/37/10) *( porgetes_merteke/360 *3);
        kerek_helyzet += forgatas_merteke; 
        porgetes_merteke -= forgatas_merteke;
        if (kerek_helyzet> 360) {
            kerek_helyzet = 0;
        }
        kerek.style.rotate = String(kerek_helyzet)+ "deg";
        console.log(kerek_helyzet)
        if (porgetes_merteke < 20) {
            clearInterval(forgatas)
        }
    }, 1);    
 
}
