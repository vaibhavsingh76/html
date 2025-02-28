function moveRandomE1(elm){
    elm.style.position = "absolute"
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomE1(e.target);
})

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".balloon-container");

    function createBalloon() {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2 to 5 seconds
        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }

    function createPopper() {
        let popper = document.createElement("div");
        popper.classList.add("popper");
        popper.style.left = Math.random() * 100 + "vw";
        popper.style.animationDuration = Math.random() * 2 + 1 + "s"; // 1 to 3 seconds
        container.appendChild(popper);

        setTimeout(() => {
            popper.remove();
        }, 2000);
    }

    setInterval(createBalloon, 500); // Create balloons every 0.5s
    setInterval(createPopper, 800); // Create poppers every 0.8s
});
