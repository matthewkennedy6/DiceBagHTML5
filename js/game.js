/*
	Initialize the game
*/
function startGame() {
	//Draw the dice
	const canvas = document.getElementById("diceCanvas");
	const ctx = canvas.getContext("2d");
	
	sides = 3;
	for(let y=0; y<1000; y+=100) {
		for(let x=0; x<500; x+=100) {
			drawDie(x, y, sides, sides);
			sides++;
		}
	}
	
	//Start on the roll tab
	document.getElementById("rollTabButton").click();
}

/*
	Draw a polygon centered at position (x,y) on the canvas with sides sides with a displayed value of value
*/
function drawDie(x, y, sides, value) {
	const canvas = document.getElementById("diceCanvas");
	const ctx = canvas.getContext("2d");
	const dieSize = 45;

	ctx.beginPath();
	ctx.moveTo(x+50+dieSize*Math.cos(0), y+50+dieSize*Math.sin(0));
	for(let i=1; i<=sides; i++) {
			ctx.lineTo(x+50 + dieSize * Math.cos(i * 2 * Math.PI / sides), y+50 + dieSize * Math.sin(i * 2 *Math.PI / sides));
	}
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.stroke();
	
	ctx.font = "20px Georgia";
	ctx.strokeText(sides.toString(), x+40, y+50);

}

/*
	Opens the tabs of the right panel
*/
function openTab(evt, tabName) {
	
	var tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i<tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	var tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i<tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

startGame();