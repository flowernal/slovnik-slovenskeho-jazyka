/**
 * Prepne všetky checkboxy
 * @param {HTMLInputElement} source
 */
const toggleAll = source => {
    let checkboxes = document.getElementsByName("flag");

    for (let checkbox of checkboxes)
        checkbox.checked = source.checked;
}

const exportFile = () => {
    fetch("https://slovnik.brambora.sk/slovnik.txt")
        .then(data => data.text())
        .then(text => console.log(text));
}