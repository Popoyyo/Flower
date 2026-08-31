let openPetal = null;

const flower = document.querySelector(".flower");

function showPanel(number) {


const panel = document.querySelector(".panel-" + number);

if (!panel) {
    return;
}

if (openPetal === number) {

    panel.classList.remove("show");

    flower.style.transform =
        "translate(-50%, -50%)";

    openPetal = null;

    return;
}

if (openPetal !== null) {
    return;
}

openPetal = number;

if (number === 1) {
    flower.style.transform =
        "translate(-50%, -50%) translate(0px, 300px)";
}

else if (number === 2) {
    flower.style.transform =
        "translate(-50%, -50%) translate(-210px, 210px)";
}

else if (number === 3) {
    flower.style.transform =
        "translate(-50%, -50%) translate(-300px, 0px)";
}

else if (number === 4) {
    flower.style.transform =
        "translate(-50%, -50%) translate(-210px, -210px)";
}

else if (number === 5) {
    flower.style.transform =
        "translate(-50%, -50%) translate(0px, -300px)";
}

else if (number === 6) {
    flower.style.transform =
        "translate(-50%, -50%) translate(210px, -210px)";
}

else if (number === 7) {
    flower.style.transform =
        "translate(-50%, -50%) translate(300px, 0px)";
}

else if (number === 8) {
    flower.style.transform =
        "translate(-50%, -50%) translate(210px, 210px)";
}

setTimeout(function() {
    panel.classList.add("show");
}, 100);


}
