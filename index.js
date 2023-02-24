let homecount = 0
let guestcount = 0

let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")

function add1homepoint() {
    homecount += 1
    homescore.textContent = homecount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}

function add2homepoints() {
    homecount += 2
    homescore.textContent = homecount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}

function add3homepoints() {
    homecount += 3
    homescore.textContent = homecount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}

function add1guestpoint() {
    guestcount += 1
    guestscore.textContent = guestcount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}

function add2guestpoints() {
    guestcount += 2
    guestscore.textContent = guestcount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}

function add3guestpoints() {
    guestcount += 3
    guestscore.textContent = guestcount
    if (homecount > guestcount) {
        document.getElementById("homescore").classList.add("winner");
        document.getElementById("guestscore").classList.remove("winner");
    } else if (guestcount > homecount) {
        document.getElementById("guestscore").classList.add("winner");
        document.getElementById("homescore").classList.remove("winner");
    } else {
        document.getElementById("guestscore").classList.remove("winner");
        document.getElementById("homescore").classList.remove("winner");
    }
}


function reset() {
    homescore.textContent = 0
    guestscore.textContent = 0
    homecount = 0
    guestcount = 0
    document.getElementById("guestscore").classList.remove("winner");
    document.getElementById("homescore").classList.remove("winner");
}
