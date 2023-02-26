function subSentences() {
	const reg = /^\\s+[A-Za-z,;'\"\\s]+[.?!]$/;
	const quotes = {
		"Gotti": Array("No, no. You don't wanna be a baseball player.", "You like... What's that movie you like so much? About spaghetti. Meatballs or something.", "This" +
		" motherfucker's on the phone talking about me! My name!", "He ain't never done time. And I don't trust anybody who's never done time.", "John..." +
		" we walk together and we fall together.", "I love you, but we got four other kids.", "You get a bad tooth, I'll be happy to knock it right out of" +
		" your mouth.", "Paul Castellano was a fucking fish in the desert.", "Yeah, I defeated that $50,000 security system with my good looks.", "Don't tell me that" +
		" I don't know it's about La Cosa Nostra. Please.", "How am I gonna kill a ghost?", "I have no doubt the other families will back you, but only if you have the" +
		" support of all five boroughs, Queens, Brooklyn, Manhattan, Staten Island, The Bronx.", "If I have to go to another fuckin' wedding, I think I'd rather go" +
		" back to Lewisburg.", "Never do anyone a small injury. You wanna hurt someone? Hurt him so bad he'll never come back at you.", "I will build something" +
		" that nobody can destroy.", "I brought him into this world. You brought him into the life.")
	}
	//Array.from(query) -> filter = only text elements -> ?foreach with replace(reg, quote)?
	Array.from(document.querySelectorAll("*")).filter(elem => elem.innerText).forEach(elem => elem.innerText = elem.innerText.replace(reg, quotes["gotti"][Math.floor(Math.random() * quotes["gottie"].length)]));
}
