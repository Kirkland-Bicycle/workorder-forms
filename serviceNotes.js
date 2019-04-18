//Service Notes

var today = new Date();
var currentDate = (today.getMonth() + 1) + "/" + today.getDate();

var text =
  "Service -- " + currentDate + ":\n" +
	"[[ MECHANIC'S NOTES ]] : \n" +
	"[[ WHEELS ]] : (Front: psi; Rear: psi)\n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ SUSPENSION ]] : (Fork: psi; Shock: psi)\n" +
 	"[[ GRIPS/BAR TAPE ]] : \n" +
        "[[ PARTS ALLOWANCE USED (Y/N) ]] : \n" +
        "[[ RECOMMENDATIONS ]] : \n" +
        "[[ CALLED (Y/N) ]] : \n" +
	"[[ OTHER ]] : \n";

originalText = document.getElementById("noteTextArea").value;
document.getElementById("noteTextArea").value = text + originalText;
