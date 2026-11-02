//cipher block elements input list
const blockElementLetters = [
    "▀", "▁", "▂", "▃", "▄", "▅", "▆", "▇",
    "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏",
    "▐", "░", "▒", "▔", "▕", "▙", "▚", "▛",
    "▜", "▟", "%"
];

document.querySelectorAll(".slot").forEach(slot => {
    blockElementLetters.forEach(key => slot.add(new Option(key, key))); //add alphabets to dropdown
    slot.addEventListener("change", () => {
        updateOptions();
        updateCipher();
    });
});

//changes the cipher text to be what is inputted into the qwerty layout
function updateCipher() {
    const mapping = {}; //create a dictionary function

    //maps out the dictionary. set the value of the dictionary to the translated Letter
    document.querySelectorAll(".slot").forEach(slot => {
        mapping[slot.value] = slot.dataset.letter;
    });


    //define any text put in html class as "original" in the stored dataset for the dictionary function
    document.querySelectorAll(".line").forEach(line => {
        line.dataset.original = line.textContent;
    });
//replace the original ciphertext with the defined value in the dictionary
    document.querySelectorAll(".line").forEach(line => {
        let result = "";

        for (let char of line.dataset.original) {
            if (mapping[char]) {
                result += mapping[char];
            } else {
                result += char;
            }
        }
        
        line.textContent = result;
    });
}

//disables options to select the same letter twice in the dropdown box
function updateOptions() {
    const slots = document.querySelectorAll(".slot");
    //   const selected = [...slots].map(slot => slot.value);

    //makes an array 
    const selected = [];

    slots.forEach(slot => {
        selected.push(slot.value);
    });

    slots.forEach(slot => {
        [...slot.options].forEach(option => {
            option.disabled = option.value !== "" &&
                selected.includes(option.value) &&
                slot.value !== option.value;
        });
    });
}