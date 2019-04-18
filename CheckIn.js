//Check-In

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
  "Check-in -- " + currentDate + ":\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ WHEELS ]] : \n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ SUSPENSION ]] : (Fork: psi; Shock: psi)\n" +
 	"[[ GRIPS/BAR TAPE ]] : \n" +
	"[[ OTHER ]] : \n"; 

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
