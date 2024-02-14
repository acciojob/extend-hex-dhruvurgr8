const extendHex = (shortHex) => {

 shortHex = shortHex.replace("#","");
	const red = shortHex[0];
	const green = shortHex[1];
	const blue = shortHex[2]
	const fullHex = `${red.repeat(2)}${green.repeat(2)}${blue.repeat(2)}`
	return fullHex;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
