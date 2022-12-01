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
    let checkboxes = document.getElementsByName("flag");
    let flags = [];
    let includeWordsWithoutFlags = false;

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            if (checkbox.value === "0") {
                includeWordsWithoutFlags = true;
            }
            else {
                flags.push(checkbox.value);
            }
        }
    }

    fetch("slovnik.txt")
        .then(data => data.text())
        .then(text => {
            let minlength = document.getElementById("minlength");
            let maxlength = document.getElementById("maxlength");
            let removeuppercase = document.getElementById("removeuppercase").checked;

            if (minlength.value.length && !maxlength.value.length) maxlength.value = minlength.value;

            let words = text.split('\n').filter(word => {
                let split = word.split('/');

                if (includeWordsWithoutFlags && !split[1])
                    return true;
                else if (split[1])
                    for (let flag of flags)
                        if (split[1].includes(flag))
                            return true;

                return false;
            }).map(word => word.split('/')[0]);

            if (minlength.value.length) words = words.filter(word => word.length >= minlength.value && word.length <= maxlength.value);
            if (removeuppercase) words = words.filter(word => word.toLowerCase() === word)

            let element = document.createElement("a");

            element.setAttribute("href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(words.join("\n"))
            );

            element.setAttribute("download", "exported.txt");

            element.style.display = "none";
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        });
}
