var today = new Date();
var currentDate = `${(today.getMonth() + 1)}`.padStart(2, "0") + "/" + today.getDate();
var employee = window.merchantos.session.getEmployee();
var employeeName = `${employee.firstName} ${employee.lastName.slice(0, 1)}`;

var text =
	"==== SERVICE =====\n" +
	"= " + currentDate + " (" + employeeName + ") =\n" +
	"[[ MECHANIC'S NOTES ]] : \n" +
	"[[ WHEELS ]] : (Front: psi; Rear: psi)\n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ SUSPENSION ]] : \n" +
	"[[ GRIPS/BAR TAPE ]] : \n" +
	"[[ PARTS ALLOWANCE USED? (Y/N) ]] : \n" +
	"[[ RECOMMENDATIONS ]] : \n" +
	"[[ CONTACTED? ]] : \n" +
	"[[ OTHER ]] : \n";

var textArea = document.getElementById("noteTextArea");
textArea.value = text + textArea.value;
textArea.onchange();