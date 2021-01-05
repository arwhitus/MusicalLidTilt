// global variables
let supported = true
let beta = null
let flat = null
let isFlat = null
let needFlat = false
const sound = new Audio()

// handle non-supported device
function noDeviceSupport() {
    if (supported === true) {
        alert("Your browser or device doesn't support or doesn't have device orientation. " +
            "Therefore, this app will not work with this browser or device.");
    }

    supported = false
}

// triggers setting flat on next loop
function setFlat() {
    if(beta == null) { noDeviceSupport() }
    else {
        needFlat = true
    }
}

function getEvent() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // iOS 13+
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    window.addEventListener('deviceorientation', orientationUpdate)
                }
                else {
                    noDeviceSupport()
                }
            })
    }
    else {
        if (!window.DeviceOrientationEvent) { noDeviceSupport() }
        window.addEventListener("deviceorientation", orientationUpdate)
    }
}

// main orientation data function
function orientationUpdate(event) {
    beta = event.beta  // In degree in the range [-180,180)

    if(beta == null) { noDeviceSupport() }
    else if(supported) {
        beta = beta + 180

        document.getElementById('pBeta').innerText = 'Beta = ' + beta

        if(needFlat) {
            flat = beta
            document.getElementById('pFlatVal').innerText = 'Flat = ' + flat

            needFlat = false
        }

        if(flat != null) {
            if(beta < flat && beta < (flat - 45)) {
                isFlat = false
            }
            else isFlat = !(beta > flat && beta > (flat + 45))

            if(isFlat) {
                document.getElementById('pPosition').innerText = 'Position: FLAT'
            }
            else {
                document.getElementById('pPosition').innerText = 'Position: UP'
            }
        }
    }
}

function playSound() {
    const files = document.getElementById('inputFile').files
    sound.src = URL.createObjectURL(files[0])
    sound.play()
}