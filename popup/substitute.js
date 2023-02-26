function getSentences() {
	const reg = /^\\s+[A-Za-z,;'\"\\s]+[.?!]$/;
	//Array.from(query) -> filter = only text elements -> ?foreach with replace(reg, quote)?
	Array.from(document.querySelectorAll("*")).filter(elem => elem.innerText).forEach(elem => elem.innerText = elem.innerText.replace(reg, "GAY"))
}
