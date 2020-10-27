const aturan = alert("ATURAN PERMAINAN :\n\n1. Pemain harus menembak bola sesuai dengan warna yang diminta.\n2. Apabila pemain tepat sasaran, maka score akan bertambah 1.\n3. Apabila pemain tidak tepat sasaran, maka score akan berkurang 2.\n\nSelamat bermain!");

const bolaMerah = document.querySelector(".bolaMerah");
const bolaKuning = document.querySelector(".bolaKuning");
const bolaHijau = document.querySelector(".bolaHijau");

let myScore = document.querySelector(".score");
let tembakBola = document.querySelector(".tembakBola");

myScore.innerHTML = "0";

let tembakanBolaWarna = ["Merah", "Kuning", "Hijau"];
tembakBola.innerHTML = tembakanBolaWarna[2];

let newScore = myScore.innerHTML;

function scoreBolaMerah() {

    if(tembakBola.innerHTML === tembakanBolaWarna[0]) {
        newScore++;
    } else {
        newScore = newScore - 2;
    }

    myScore.innerHTML = newScore;

    if(tembakBola.innerHTML === tembakanBolaWarna[0]) {
        tembakBola.innerHTML = tembakanBolaWarna[1];
    } else if(tembakBola.innerHTML === tembakanBolaWarna[1]) {
        tembakBola.innerHTML = tembakanBolaWarna[2];
    } else {
        tembakBola.innerHTML = tembakanBolaWarna[0];     
    }
}

function scoreBolaKuning() {

    if(tembakBola.innerHTML === tembakanBolaWarna[1]) {
        newScore++;
    } else {
        newScore = newScore - 2;
    }

    myScore.innerHTML = newScore;

    if(tembakBola.innerHTML === tembakanBolaWarna[0]) {
        tembakBola.innerHTML = tembakanBolaWarna[1];
    } else if(tembakBola.innerHTML === tembakanBolaWarna[1]) {
        tembakBola.innerHTML = tembakanBolaWarna[2];
    } else {
        tembakBola.innerHTML = tembakanBolaWarna[0];     
    }
}

function scoreBolaHijau() {

    if(tembakBola.innerHTML === tembakanBolaWarna[2]) {
        newScore++;
    } else {
        newScore = newScore - 2;
    }

    myScore.innerHTML = newScore;

    if(tembakBola.innerHTML === tembakanBolaWarna[0]) {
        tembakBola.innerHTML = tembakanBolaWarna[1];
    } else if(tembakBola.innerHTML === tembakanBolaWarna[1]) {
        tembakBola.innerHTML = tembakanBolaWarna[2];
    } else {
        tembakBola.innerHTML = tembakanBolaWarna[0];     
    }
}

bolaMerah.onclick = scoreBolaMerah;
bolaKuning.onclick = scoreBolaKuning;
bolaHijau.onclick = scoreBolaHijau;

