function clock() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('#clock');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('zerar')) {
            clock.classList.remove('pausado');
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }

        if (elemento.classList.contains('start')) {
            clock.classList.remove('pausado')
            clearInterval(timer);
            startClock()
        }


        if (elemento.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('pausado');
        }
    });

}

clock();