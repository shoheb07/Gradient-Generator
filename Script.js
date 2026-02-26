function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    document.getElementById("gradientBox").style.background = gradient;
    document.getElementById("cssCode").textContent = gradient + ";";
}

function copyCode() {
    const cssText = document.getElementById("cssCode").textContent;
    navigator.clipboard.writeText(cssText);
    alert("CSS Code Copied!");
}
