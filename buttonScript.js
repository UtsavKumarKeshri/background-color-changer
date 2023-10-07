const colorChanger = document.getElementById("btnChanger");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color = color + val[Math.floor(Math.random()*16)];
    }
    return color;
};

function changeColorRandomly() {
    document.body.style.backgroundColor = randomColor();
}

colorChanger.addEventListener("click", changeColorRandomly);