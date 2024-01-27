var today = new Date();
var currentDate = `${(today.getMonth() + 1)}`.padStart(2, "0") + "/" + today.getDate();
var employee = window.merchantos.session.getEmployee();
var employeeName = `${employee.firstName} ${employee.lastName.slice(0, 1)}`;

var text =
	"===== QUOTE ======\n" +
	"= " + currentDate + " (" + employeeName + ") =\n" +
	"[[ REQUESTS ]] : \n" +
	"[[ WHEELS ]] : \n" +
	"[[ BRAKES ]] : \n" +
	"[[ DRIVETRAIN ]] : \n" +
	"[[ CABLE KITS ]] : \n" +
	"[[ BEARINGS ]] : \n" +
	"[[ SUSPENSION ]] : \n" +
	"[[ GRIPS/BAR TAPE ]] : \n" +
	"[[ OTHER ]] : \n";

var textArea = document.getElementById("noteTextArea");
textArea.value = text + textArea.value;
textArea.onchange();