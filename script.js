// ❤️ Forever Begins Here
// NABIL AKHTAR ❤️ TAHURA FAIZ


// ⏳ Live Relationship Counter

const startDate = new Date("August 10, 2022 00:00:00");

function updateLoveCounter() {

    const now = new Date();
    const difference = now - startDate;

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const days = totalDays % 365;


    const counter = document.getElementById("counter");

    if (counter) {

        counter.innerHTML =
        years + " Years ❤️ " +
        days + " Days ❤️ " +
        hours + " Hours ❤️ " +
        minutes + " Minutes ❤️ " +
        seconds + " Seconds";

    }
}


setInterval(updateLoveCounter, 1000);
updateLoveCounter();




// ❤️ Floating Hearts Animation

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.zIndex = "999";

    heart.style.animation = "floatHeart 6s linear";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 6000);

}


setInterval(createHeart, 1000);
