function chaseMouse() {
    let img = document.getElementById("image");
    img.style.position = "absolute";
    img.style.left = (Math.random() * 300) + "px";
    img.style.top = (Math.random() * 400) + "px";
    img.style.bottom = (Math.random() * 300) + "px";
    img.style.right = (Math.random() * 400) + "px";
}

function catchMouse() {
    alert("Congratulations, You Win!");
}