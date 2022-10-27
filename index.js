{
    let i = Math.floor(Math.random() * 3)
    const e = document.documentElement;
    switch (i) {
        case 0:
            e.style.setProperty('--wlcm-grad-l', 'rgb(0,140,230)');
            e.style.setProperty('--wlcm-grad-r', 'rgb(140,0,230)');
            break;
        case 1:
            e.style.setProperty('--wlcm-grad-l', 'rgb(0,230,140)');
            e.style.setProperty('--wlcm-grad-r', 'rgb(140,230,0)');
            break;
        case 2:
            e.style.setProperty('--wlcm-grad-l', 'rgb(230,140,0)');
            e.style.setProperty('--wlcm-grad-r', 'rgb(230,0,140)');
            break;
    }
}
function animateOpening() {
    console.log('hey')
    document.querySelector("main").setAttribute('style', 'animation: openingAnimation 200ms ease-in');
    setTimeout(function () { document.querySelector("main").setAttribute('style', 'clip-path: circle(100% at 50% 50%)'); }, 190)
}