function myOverFunction() {
    console.log("Yoo");
    var bigPanel = document.getElementById("expanded-panel");
	bigPanel.style.display = "inline"; 

	window.onclick = function(event) {
	    if (event.target == bigPanel) {
	        bigPanel.style.display = "none";
	    }
	} 
}