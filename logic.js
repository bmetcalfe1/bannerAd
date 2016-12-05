function myOverFunction() {
    console.log("...opening expandable banner...");
    var bigPanel = document.getElementById("expanded-banner");
	bigPanel.style.display = "inline"; 

	window.onclick = function(event) {
	    if (event.target == bigPanel) {
	        bigPanel.style.display = "none";
	    }
	} 
}