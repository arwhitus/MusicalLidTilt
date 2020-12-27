let supported = true;

function noDeviceSupport() {
    if (supported === true) {
        alert("Your browser or device doesn't support or doesn't have Device Orientation. " +
            "Therefore, this app will not work with this browser or app.");
    }

    supported = false;
}

function orientationUpdate(event) {
    let beta = event.beta;  // In degree in the range [-180,180)

    if(beta == null) { noDeviceSupport(); }

    if(supported) {
        document.getElementById('pBeta').innerText = 'Beta = ' + beta;
    }
}

if (!window.DeviceOrientationEvent) {
    noDeviceSupport();
}
window.addEventListener("deviceorientation", orientationUpdate);