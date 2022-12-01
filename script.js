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
			const minLength = document.getElementById("minLength");
			const maxLength = document.getElementById("maxLength");
			const removeUppercase = document.getElementById("removeUppercase").checked;

			let words = text.split("\n").filter(word => {
				const split = word.split("/");

				if (includeWordsWithoutFlags && !split[1]) {
					return true;
				}
				else if (split[1]) {
					for (let flag of flags) {
						if (split[1].includes(flag)) {
							return true;
						}
					}
				}

				return false;
			}).map(word => word.split("/")[0]).filter(word => {
				if (minLength.value.length && word.length < Number(minLength.value)) {
					return false;
				}

				if (maxLength.value.length && word.length > Number(maxLength.value)) {
					return false;
				}
				
				if (removeUppercase && word.toLowerCase() !== word) {
					return false;
				}

				return true;
			});

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
