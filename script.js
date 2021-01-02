let supported = true;
let beta = 9999;
let flat = 9999;
let isFlat = null;

function noDeviceSupport() {
    if (supported === true) {
        alert("Your browser or device doesn't support or doesn't have device orientation. " +
            "Therefore, this app will not work with this browser or device.");
    }

    supported = false;
}

function setFlat() {
    if(beta === 9999 || beta == null) { noDeviceSupport(); }
    else {
        flat = beta;
        document.getElementById('pFlatVal').innerText = 'Flat = ' + (flat - 180);
    }
}

function orientationUpdate(event) {
    beta = event.beta;  // In degree in the range [-180,180)

    if(beta == null || beta === 9999) { noDeviceSupport(); }
    else if(supported) {
        beta = beta + 180;

        document.getElementById('pBeta').innerText = 'Beta = ' + (beta - 180);

        if(flat !== 9999) {
            if(beta < flat && beta < (flat - 45)) {
                isFlat = false;
            }
            else isFlat = !(beta > flat && beta > (flat + 45));

            if(isFlat) {
                document.getElementById('pPosition').innerText = 'Position: FLAT';
            }
            else {
                document.getElementById('pPosition').innerText = 'Position: UP';
            }

        }
    }
}

if (!window.DeviceOrientationEvent) {
    noDeviceSupport();
}
window.addEventListener("deviceorientation", orientationUpdate);