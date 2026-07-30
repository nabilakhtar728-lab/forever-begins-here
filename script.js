const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    startBtn.innerText = "Loading Our Love Story... ❤️";
    startBtn.disabled = true;

    document.body.style.transition = "1.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        alert(
`❤️ Welcome Tahura ❤️

Our journey began on
10 August 2022

This is only the beginning...

A beautiful surprise is waiting for you. 💍`
        );

        document.body.style.opacity = "1";
        startBtn.innerText = "Begin Our Story ❤️";
        startBtn.disabled = false;
    }, 1500);
});
