const field = document.getElementById("field-wrapper");
const ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
    ball.style.top = event.pageY - 128 + "px";
    ball.style.left = event.pageX - 128 + "px";
    if (event.pageY > (500 - 28) || event.pageX > (750 - 28) || event.pageY < (128) || event.pageX < (128)) {
        ball.style.top = 0 + "px";
        ball.style.left = 0 + "px";
    };
});

