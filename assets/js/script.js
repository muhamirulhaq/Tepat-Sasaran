document.querySelector("body").style.background = "url(assets/img/space2.jpg)";
document.querySelector("header").style.background = "url(assets/img/space.jpg)";

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

let tembakanBolaWarna = ["Bumi", "Jupiter", "Mars"];
tembakBola.innerHTML = tembakanBolaWarna[2];

let newScore = myScore.innerHTML;

let iRandom = 0;

function scoreBolaMerah() {

    audio.play();

    if(newScore < 20) {
        marq.setAttribute("scrollamount", "12");
        marq2.setAttribute("scrollamount", "10");
        marq3.setAttribute("scrollamount", "14");
    } else if(newScore >= 20 && newScore < 40) {
        marq.setAttribute("scrollamount", "18");
        marq2.setAttribute("scrollamount", "20");
        marq3.setAttribute("scrollamount", "16");
    } else if(newScore >= 40 && newScore < 70) {
        marq.setAttribute("scrollamount", "26");
        marq2.setAttribute("scrollamount", "22");
        marq3.setAttribute("scrollamount", "24");
    } else if(newScore >= 70 && newScore < 80) {
        marq.setAttribute("scrollamount", "30");
        marq2.setAttribute("scrollamount", "28");
        marq3.setAttribute("scrollamount", "32");
    } else if(newScore >= 80 && newScore < 100) {
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

    let random = [0, 1, 2, 0, 2, 0, 1, 2, 0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 0, 1];

    tembakBola.innerHTML = tembakanBolaWarna[random[iRandom % random.length]];
    iRandom++;
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

    let random = [0, 1, 2, 0, 2, 0, 1, 2, 0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 0, 1];

    tembakBola.innerHTML = tembakanBolaWarna[random[iRandom % random.length]];
    iRandom++;
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

    let random = [0, 1, 2, 0, 2, 0, 1, 2, 0, 1, 0, 2, 1, 0, 1, 0, 2, 1, 0, 1];

    tembakBola.innerHTML = tembakanBolaWarna[random[iRandom % random.length]];
    iRandom++;
}

bolaMerah.onclick = scoreBolaMerah;
bolaKuning.onclick = scoreBolaKuning;
bolaHijau.onclick = scoreBolaHijau;

