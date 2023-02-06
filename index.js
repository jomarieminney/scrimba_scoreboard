let homecount = 0
let guestcount = 0

let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")

function add1homepoint() {
    homecount += 1
    homescore.textContent = homecount
}

function add2homepoints() {
    homecount += 2
    homescore.textContent = homecount
}

function add3homepoints() {
    homecount += 3
    homescore.textContent = homecount
}

function add1guestpoint() {
    guestcount += 1
    guestscore.textContent = guestcount
}

function add2guestpoints() {
    guestcount += 2
    guestscore.textContent = guestcount
}

function add3guestpoints() {
    guestcount += 3
    guestscore.textContent = guestcount
}


function reset() {
    homescore.textContent = 0
    guestscore.textContent = 0
    homecount = 0
    guestcount = 0
}
