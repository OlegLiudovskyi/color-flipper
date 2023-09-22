const colors = ['green', 'red', 'rgba(133,114,200)', '#444'];
const btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomColor = getRandomColor();
    console.log(randomColor);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})
function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}