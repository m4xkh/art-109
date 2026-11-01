//cipher block elements input list
const utfKeys = [
    "▀", "▁", "▂", "▃", "▄", "▅", "▆", "▇",
    "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏",
    "▐", "░", "▒", "▔", "▕", "▙", "▚", "▛",
    "▜", "▟","%"
];

document.querySelectorAll(".slot").forEach(slot => {
    utfKeys.forEach(key => slot.add(new Option(key, key)));
    slot.addEventListener("change", () => {
        updateOptions();
        updateCipher();
    });
});

//changes the cipher text to be what is inputted into the qwerty layout
function updateCipher() {
    const mapping = {};

    document.querySelectorAll(".slot").forEach(slot => {
        mapping[slot.value] = slot.dataset.letter;
    });

    document.querySelectorAll(".line").forEach(line => {
        const original = line.dataset.original || line.textContent;
        line.dataset.original = original;

        line.textContent = [...original].map(char =>
            mapping[char] || char
        ).join("");
    });
}

//disables options to select the same letter twice in the dropdown box
function updateOptions() {
    const slots = document.querySelectorAll(".slot");
    const selected = [...slots].map(slot => slot.value);

    slots.forEach(slot => {
        [...slot.options].forEach(option => {
            option.disabled = option.value !== "" &&
                selected.includes(option.value) &&
                slot.value !== option.value;
        });
    });
}