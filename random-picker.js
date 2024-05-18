
const major_keys = ["C", "G", "D", "A", "E", "B", "Gb", "F#", "Db", "Ab", "Eb", "Bb", "F"];
const minor_keys = ["Am", "Em", "Bm", "F#m", "C#m", "G#m", "Ebm", "D#m", "Bbm", "Fm", "Cm","Gm", "Dm"];

function pickRandomKey(list, targetKeyId){
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomKey = list[randomIndex];
    document.getElementById(targetKeyId).textContent = randomKey;
}

function pickMajorKey() {
    pickRandomKey(major_keys, "random-key")
}

function pickMinorKey() {
    pickRandomKey(minor_keys, "random-key")
}