const aturan = alert("ATURAN PERMAINAN :\n\n1. Pemain harus menembak bola sesuai dengan warna yang diminta.\n2. Apabila pemain tepat sasaran, maka score akan bertambah 1.\n3. Apabila pemain tidak tepat sasaran, maka score akan berkurang 2.\n\nSelamat mencoba!");

const bolaMerah = document.querySelector(".bolaMerah");
const bolaKuning = document.querySelector(".bolaKuning");
const bolaHijau = document.querySelector(".bolaHijau");

const marq = document.querySelector(".marq");
const marq2 = document.querySelector(".marq2");
const marq3 = document.querySelector(".marq3");

const audio = document.querySelector(".shoot");

let myScore = document.querySelector(".score");
let tembakBola = document.querySelector(".tembakBola");

myScore.innerHTML = "0";

let tembakanBolaWarna = ["Merah", "Kuning", "Hijau"];
tembakBola.innerHTML = tembakanBolaWarna[2];

let newScore = myScore.innerHTML;

function scoreBolaMerah() {

    audio.play();

    if(newScore < 10) {
        marq.setAttribute("scrollamount", "12");
        marq2.setAttribute("scrollamount", "10");
        marq3.setAttribute("scrollamount", "14");
    } else if(newScore >= 10 && newScore < 20) {
        marq.setAttribute("scrollamount", "18");
        marq2.setAttribute("scrollamount", "20");
        marq3.setAttribute("scrollamount", "16");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "26");
        marq2.setAttribute("scrollamount", "22");
        marq3.setAttribute("scrollamount", "24");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "30");
        marq2.setAttribute("scrollamount", "28");
        marq3.setAttribute("scrollamount", "32");
    } else if(newScore >= 30 && newScore < 40) {
        marq.setAttribute("scrollamount", "36");
        marq2.setAttribute("scrollamount", "38");
        marq3.setAttribute("scrollamount", "34");
    } else {
        marq.setAttribute("scrollamount", "44");
        marq2.setAttribute("scrollamount", "46");
        marq3.setAttribute("scrollamount", "42");
    }

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
    
    audio.play();

    if(newScore < 10) {
        marq.setAttribute("scrollamount", "12");
        marq2.setAttribute("scrollamount", "10");
        marq3.setAttribute("scrollamount", "14");
    } else if(newScore >= 10 && newScore < 20) {
        marq.setAttribute("scrollamount", "18");
        marq2.setAttribute("scrollamount", "20");
        marq3.setAttribute("scrollamount", "16");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "26");
        marq2.setAttribute("scrollamount", "22");
        marq3.setAttribute("scrollamount", "24");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "30");
        marq2.setAttribute("scrollamount", "28");
        marq3.setAttribute("scrollamount", "32");
    } else if(newScore >= 30 && newScore < 40) {
        marq.setAttribute("scrollamount", "36");
        marq2.setAttribute("scrollamount", "38");
        marq3.setAttribute("scrollamount", "34");
    } else {
        marq.setAttribute("scrollamount", "44");
        marq2.setAttribute("scrollamount", "46");
        marq3.setAttribute("scrollamount", "42");
    }

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

    audio.play();

    if(newScore < 10) {
        marq.setAttribute("scrollamount", "12");
        marq2.setAttribute("scrollamount", "10");
        marq3.setAttribute("scrollamount", "14");
    } else if(newScore >= 10 && newScore < 20) {
        marq.setAttribute("scrollamount", "18");
        marq2.setAttribute("scrollamount", "20");
        marq3.setAttribute("scrollamount", "16");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "26");
        marq2.setAttribute("scrollamount", "22");
        marq3.setAttribute("scrollamount", "24");
    } else if(newScore >= 20 && newScore < 30) {
        marq.setAttribute("scrollamount", "30");
        marq2.setAttribute("scrollamount", "28");
        marq3.setAttribute("scrollamount", "32");
    } else if(newScore >= 30 && newScore < 40) {
        marq.setAttribute("scrollamount", "36");
        marq2.setAttribute("scrollamount", "38");
        marq3.setAttribute("scrollamount", "34");
    } else {
        marq.setAttribute("scrollamount", "44");
        marq2.setAttribute("scrollamount", "46");
        marq3.setAttribute("scrollamount", "42");
    }

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

