let peliStarted=false;
let timer;
let timestarted;
let score=0;
let timeduration=120*1000;

let startwidth=80;
let merkki=1;
let pluseonetop;

window.onload = function () {

    document.getElementById('btn_aloita').addEventListener("click", btn_aloita);
    document.getElementById('btn_stop').addEventListener("click", btn_stop);
    document.getElementById('istockphoto').addEventListener("click", lisener_istockphoto);


}
function lisener_istockphoto(){
    if (peliStarted){
        score+=1;
        plusone.style.opacity=1;
        pluseonetop=150;

        plusone.style.top= pluseonetop+'px'

    }
}
function btn_stop(){
    if (peliStarted){
        clearInterval(timer);
    
    }
    peliStarted=false;
    document.getElementById("aikaajäljellä").innerHTML ="Peli stoped";


}

function btn_aloita(){
    if (peliStarted){
        clearInterval(timer);

    }
    score=0;
    peliStarted=true;
    timer=setInterval(peliisgoing,20);   
    timestarted=Date.now();
    let today=new Date(timestarted);
    document.getElementById("aloitusaika").innerHTML ="Peli alloitettiin: "+today.toLocaleTimeString();
    plusone.style.opacity=0;
    pluseonetop=150;
    console.clear();

}

function peliisgoing(){
    let timePassed = Date.now() - timestarted;
 
    
    
    if (timePassed >= timeduration) {
        clearInterval(timer); // закончить анимацию через 120 секунды
        plusone.style.opacity=1;
        plusone.style.top='200px';
        istockphoto.style.width='80%';
        istockphoto.style.height='80%';
        // box.style.top= '100px';
        // box.style.left= '100px';
        
        return;
    }
    const s = (timeduration-timePassed )/ 1000;
    const minutes = Math.floor(s / 60); // Оставляем только целую часть
    const seconds = Math.floor(s % 60);

    const strminutes=String(minutes).padStart(2,'0');
    const strseconds=String(seconds).padStart(2,'0');
    document.getElementById("aikaajäljellä").innerHTML ="Lopun aika: "+strminutes + ':' + strseconds;
    document.getElementById("score").innerHTML ="Pelin tulos: "+score;
  
    
//   plusone.style.left = timePassed / 5 + 'px';
pluseonetop-=2;
    if (pluseonetop<0){
        pluseonetop=150;
        plusone.style.opacity=0;
    }

    plusone.style.top=pluseonetop+ 'px'
 
    switch (startwidth){
        case 79: 
        merkki=1;
        break;
        case 100: 
        merkki=-1;
        break;

  
    }

    startwidth+=merkki;

    istockphoto.style.width=startwidth+'%';
    istockphoto.style.height=startwidth+'%';
    
   

}


