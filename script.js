let supported = true;
let beta = 9999;
let flat = 9999;

function noDeviceSupport() {
    if (supported === true) {
        alert("Your browser or device doesn't support or doesn't have Device Orientation. " +
            "Therefore, this app will not work with this browser or app.");
    }

    supported = false;
}

function setFlat() {
    if(beta === 9999 || beta == null) { noDeviceSupport(); }
    else {
        flat = beta;
        document.getElementById('pFlatVal').innerText = 'Flat = ' + flat;
    }
}

function orientationUpdate(event) {
    beta = event.beta;  // In degree in the range [-180,180)

    if(beta == null) { noDeviceSupport(); }
    else if(supported) {
        document.getElementById('pBeta').innerText = 'Beta = ' + beta;


    }
}

if (!window.DeviceOrientationEvent) {
    noDeviceSupport();
}
window.addEventListener("deviceorientation", orientationUpdate);