function changeMode(size, weight, transform, background, color) {
    let body = document.querySelector('body');

    body.style.fontSize = size
    body.style.fontWeight = weight
    body.style.textTransform = transform
    body.style.backgroundColor = background
    body.style.color = color
}

function main() {
    let spooky = () => {changeMode(9, "bold", "uppercase", "pink", "green")}
    let darkMode = () => {changeMode(12, "bold", "capitalize", "black", "white")}
    let screamMode = () => {changeMode(12, "normal", "lowercase", "white", "black")}

    let p = document.createElement("p");
    p.innerHTML = "Welcome Holberton!"
    document.body.appendChild(p);

    let spookyBtn = document.createElement("button");
    spookyBtn.innerHTML = "Spooky"
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener('click', event => {
        spooky()
    });

    let darkBtn = document.createElement("button");
    darkBtn.innerHTML = "Dark mode"
    document.body.appendChild(darkBtn);
    darkBtn.addEventListener('click', event => {
        darkMode()
    });

    let screamBtn = document.createElement("button");
    screamBtn.innerHTML = "Scream mode"
    document.body.appendChild(screamBtn);
    screamBtn.addEventListener('click', event => {
        screamMode()
    });
}