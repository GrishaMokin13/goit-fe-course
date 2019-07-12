const zhekaImg = document.querySelector('.zheka');
let bool = true;
if (bool) {
    zhekaImg.addEventListener('click', () => {
        zhekaImg.style.animationName = 'heart';
        setInterval(() => {
            const dot = document.createElement('img');
            dot.setAttribute('src', './imgs/Romka.jpg');
            dot.classList.add('roma');
            document.body.append(dot);
        }, 600)
    });
    bool = !bool;
}