let time = document.querySelector('.js-time');
let strbutt = document.querySelector('.js-start');
let lapbutt = document.querySelector('.js-take-lap');
let rstbutt = document.querySelector('.js-reset');
let ul = document.querySelector('.laps');
let counter = 0;
let clock;
let bool = false;
let checker = false;
strbutt.addEventListener('click',

    () => {
        if (bool) {
            bool = false;

        } else {
            bool = true;
        }
        if (!checker)
       { clock = setInterval(() => {
            if (bool) {
                counter += 100;
                let mins = Math.floor(counter / 60000);
                let secs = Math.floor(counter / 1000 % 60);
                let huns = Math.floor(counter / 100 % 10);
                time.textContent = `${mins}:${secs}.${huns}`
                strbutt.textContent = 'Continue';
            } else {
                strbutt.textContent = 'Start';
            }
        }, 100)
    checker = true;}
    });
lapbutt.addEventListener('click', () => {
    let currt = time.textContent;
    const li = document.createElement('li');
    li.textContent = currt;
    ul.append(li);
});
rstbutt.addEventListener('click', () => {
    clearInterval(clock);
    time.textContent = '0:0.0';
    strbutt.textContent = 'Start';
    bool = false;
    counter = 0;
    checker = false;
})