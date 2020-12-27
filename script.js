function orientationUpdate(event) {
    var a = event.alpha;
    var x = event.beta;  // In degree in the range [-180,180)
    var y = event.gamma; // In degree in the range [-90,90)

    document.getElementById('pAlpha').innerText = 'Alpha = ' + a;
    document.getElementById('pBeta').innerText = 'Beta = ' + x;
    document.getElementById('pGamma').innerText = 'Gamma = ' + y;

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90}
    if (x < -90) { x = -90}

    // To make computation easier we shift the range of
    // x and y to [0,180]
    x += 90;
    y += 90;
}

window.addEventListener('deviceorientation', orientationUpdate);