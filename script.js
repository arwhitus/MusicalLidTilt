let supported = true;

function noDeviceSupport() {
    if (supported == true) {
        alert("Your browser or device doesn't support or doesn't have Device Orientation. " +
            "Therefore, this app will not work with this browser or app.");
    }

    supported = false;
}

function orientationUpdate(event) {
    const beta = event.beta;  // In degree in the range [-180,180)

    if(beta == null) { noDeviceSupport(); }

    document.getElementById('pBeta').innerText = 'Beta = ' + beta;

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90}
    if (x < -90) { x = -90}

    // To make computation easier we shift the range of
    // x and y to [0,180]
    x += 90;
    y += 90;
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", orientationUpdate);
} else {
    alert("Sorry, your browser doesn't support Device Orientation");
}