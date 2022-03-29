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
    fetch("")
        .then(data => console.log(data));
}