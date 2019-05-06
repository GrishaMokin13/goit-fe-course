fetch(`https://pokeapi.co/api/v2/pokemon/?limit=807%22`)
    .then(poke => poke.json())
    .then(data => data.results)
    .then(arr => {
        for (let j = 0; j < 151; j++) {
            let name = document.createElement('p');
            let img = document.createElement('img');
            let card = document.createElement('div');
            let bool = true;
            let wrap = document.querySelector('.wrap');
            card.classList.add('pokemon')
            if (arr[j].name === 'nidoran-f') {
                arr[j].name = 'nidoranf';
            }
            if (arr[j].name === 'nidoran-m') {
                arr[j].name = 'nidoranm';
            }
            localStorage.setItem(arr[j].name, `http://pokestadium.com/sprites/xy/${arr[j].name}.gif`);
            localStorage.setItem(`${arr[j].name}-shiny`, `http://pokestadium.com/sprites/xy/shiny/${arr[j].name}.gif`);
            img.setAttribute('src', localStorage.getItem(arr[j].name))
            img.addEventListener('click', () => {
                if (bool) {
                    if (arr[j].name === 'nidoranf' || arr[j].name === 'nidoranm' || arr[j].name === 'mr-mime') {} else {
                        img.setAttribute('src', localStorage.getItem(`${arr[j].name}-shiny`));
                        bool = !bool;
                    }
                } else {
                    img.setAttribute('src', localStorage.getItem(arr[j].name));
                    bool = !bool;

                }
            })
            name.textContent = arr[j].name;
            card.append(img, name);
            wrap.append(card);
        }
    });